#!/usr/bin/env python3
"""
X (Twitter) への自動投稿スクリプト
既にログイン済みの Chrome ブラウザを使用して投稿する

【使い方】
  python x_browser_post.py "投稿テキスト"
  python x_browser_post.py "投稿テキスト" --dry-run   # テスト（実際には投稿しない）

【事前準備】
  pip install playwright
  playwright install chrome

【接続方法】
  方法A（推奨）: Chrome を --remote-debugging-port 付きで起動
    open -a "Google Chrome" --args --remote-debugging-port=9222
    → その後このスクリプトを実行（Chrome を閉じなくてよい）

  方法B: Chrome を閉じた状態でプロファイルを直接使用
    Chrome をすべて終了してからスクリプトを実行
"""

import sys
import time
import argparse
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

# Chrome プロファイルパス（macOS）
CHROME_USER_DATA_DIR = str(Path.home() / "Library/Application Support/Google/Chrome")
CHROME_PROFILE = "Default"  # 複数プロファイルがある場合は "Profile 1" 等に変更

# CDP 接続先（方法A で起動した場合）
CDP_ENDPOINT = "http://localhost:9222"

# X のツイート作成 URL
X_COMPOSE_URL = "https://x.com/compose/post"
X_HOME_URL = "https://x.com/home"


def wait_and_click(page, selector: str, timeout: int = 10000, description: str = ""):
    """要素を待ってクリック"""
    try:
        element = page.wait_for_selector(selector, timeout=timeout)
        element.click()
        return element
    except PlaywrightTimeoutError:
        raise RuntimeError(f"タイムアウト: {description or selector} が見つかりませんでした")


def post_tweet(page, text: str, dry_run: bool = False) -> bool:
    """ページ上でツイートを投稿する"""

    print(f"X.com を開いています...")
    page.goto(X_HOME_URL, wait_until="domcontentloaded", timeout=30000)
    time.sleep(2)

    # ログインチェック
    if "login" in page.url or "flow/login" in page.url:
        print("エラー: X にログインしていません。Chrome で先にログインしてください。")
        return False

    # ツイート作成ボタンをクリック（ホーム画面のサイドバー）
    print("ツイート作成ボタンをクリックしています...")
    try:
        # サイドバーの「投稿」ボタン
        wait_and_click(
            page,
            '[data-testid="SideNav_NewTweet_Button"]',
            timeout=8000,
            description="投稿ボタン（サイドバー）"
        )
        time.sleep(1)
    except RuntimeError:
        # 直接 compose URL に移動
        print("compose URL に直接移動します...")
        page.goto(X_COMPOSE_URL, wait_until="domcontentloaded", timeout=30000)
        time.sleep(2)

    # テキスト入力欄を探す
    print("テキスト入力欄を探しています...")
    try:
        tweet_box = page.wait_for_selector(
            '[data-testid="tweetTextarea_0"]',
            timeout=10000
        )
    except PlaywrightTimeoutError:
        raise RuntimeError("テキスト入力欄が見つかりませんでした。X のUI変更があった可能性があります。")

    # テキストを入力
    tweet_box.click()
    time.sleep(0.5)
    tweet_box.fill(text)
    time.sleep(0.5)

    print(f"\n投稿内容:\n{'─' * 40}\n{text}\n{'─' * 40}")
    print(f"文字数: {len(text)} / 280")

    if dry_run:
        print("\n[DRY RUN] 投稿ボタンは押しません")
        time.sleep(2)
        return True

    # 投稿ボタンをクリック
    print("\n投稿しています...")
    try:
        # モーダル内の投稿ボタン
        post_button = page.wait_for_selector(
            '[data-testid="tweetButton"]',
            timeout=5000
        )
    except PlaywrightTimeoutError:
        try:
            # インライン投稿ボタン（別パターン）
            post_button = page.wait_for_selector(
                '[data-testid="tweetButtonInline"]',
                timeout=5000
            )
        except PlaywrightTimeoutError:
            raise RuntimeError("投稿ボタンが見つかりませんでした")

    post_button.click()
    time.sleep(3)

    # 投稿完了確認（URLがホームに戻るか確認）
    print("投稿完了！")
    return True


def is_chrome_running() -> bool:
    """Chrome プロセスが実行中か確認"""
    result = subprocess.run(["pgrep", "-x", "Google Chrome"], capture_output=True)
    return result.returncode == 0


def launch_chrome_with_cdp():
    """Chrome を CDP ポート付きで起動"""
    subprocess.Popen(
        ["open", "-a", "Google Chrome", "--args", f"--remote-debugging-port=9222"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def connect_via_cdp(playwright, silent: bool = False) -> tuple:
    """Chrome の CDP エンドポイントに接続"""
    try:
        browser = playwright.chromium.connect_over_cdp(CDP_ENDPOINT)
        contexts = browser.contexts
        if contexts:
            context = contexts[0]
            pages = context.pages
            page = pages[0] if pages else context.new_page()
        else:
            context = browser.new_context()
            page = context.new_page()
        if not silent:
            print(f"CDP で接続しました: {CDP_ENDPOINT}")
        return browser, context, page
    except Exception as e:
        raise ConnectionError(str(e))


def connect_via_profile(playwright) -> tuple:
    """Chrome プロファイルを直接使用して起動"""
    print(f"プロファイルを使用: {CHROME_USER_DATA_DIR} / {CHROME_PROFILE}")
    try:
        context = playwright.chromium.launch_persistent_context(
            user_data_dir=CHROME_USER_DATA_DIR,
            channel="chrome",
            headless=False,
            args=[f"--profile-directory={CHROME_PROFILE}"],
            no_viewport=True,
        )
        page = context.new_page()
        print("プロファイルで起動しました")
        return None, context, page
    except Exception as e:
        raise ConnectionError(
            f"プロファイルでの起動に失敗しました: {e}\n"
            f"Chrome がすべて閉じているか確認してください。\n"
            f"または CDP モードを使用してください:\n"
            f"  open -a \"Google Chrome\" --args --remote-debugging-port=9222"
        )


def connect_auto(playwright) -> tuple:
    """
    自動モード:
      1. CDP に接続を試みる（サイレント）
      2. 失敗 & Chrome 未起動 → CDP ポート付きで Chrome を自動起動して再試行
      3. 失敗 & Chrome 起動中（CDP なし） → プロファイルモードにフォールバック
      4. すべて失敗 → 明確なエラー
    """
    # ① CDP を試みる（サイレント）
    try:
        result = connect_via_cdp(playwright, silent=True)
        print(f"CDP で接続しました: {CDP_ENDPOINT}")
        return result
    except ConnectionError:
        pass

    # ② Chrome が起動していない → CDP ポート付きで自動起動して再試行
    if not is_chrome_running():
        print("Chrome が起動していません。CDP ポート付きで自動起動します...")
        launch_chrome_with_cdp()
        for i in range(8):  # 最大 8 秒待つ
            time.sleep(1)
            try:
                result = connect_via_cdp(playwright, silent=True)
                print(f"CDP で接続しました: {CDP_ENDPOINT}")
                return result
            except ConnectionError:
                pass
        raise ConnectionError(
            "Chrome を起動しましたが CDP に接続できませんでした。\n"
            "手動で以下を実行してください:\n"
            "  open -a \"Google Chrome\" --args --remote-debugging-port=9222"
        )

    # ③ Chrome 起動中（CDP なし） → プロファイルモードにフォールバック
    print("Chrome が起動中ですが CDP ポートが無効です。プロファイルモードで試みます...")
    try:
        return connect_via_profile(playwright)
    except ConnectionError:
        raise ConnectionError(
            "自動接続に失敗しました。以下のいずれかを試してください:\n"
            "\n"
            "  A) Chrome を再起動（CDP モード）:\n"
            "     open -a \"Google Chrome\" --args --remote-debugging-port=9222\n"
            "\n"
            "  B) Chrome をすべて閉じてからスクリプトを再実行\n"
        )


def main():
    parser = argparse.ArgumentParser(
        description="X (Twitter) への自動投稿",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
例:
  python x_browser_post.py "こんにちは！"
  python x_browser_post.py "テスト投稿" --dry-run
  python x_browser_post.py "投稿テキスト" --mode profile

事前準備（CDP モードの場合）:
  open -a "Google Chrome" --args --remote-debugging-port=9222
        """
    )
    parser.add_argument("text", nargs="?", help="投稿するテキスト（省略するとstdinから読む）")
    parser.add_argument("--dry-run", action="store_true", help="実際には投稿しない（動作確認用）")
    parser.add_argument(
        "--mode",
        choices=["cdp", "profile", "auto"],
        default="auto",
        help="接続モード: cdp=リモートデバッグ, profile=プロファイル直接, auto=CDP優先（デフォルト）"
    )
    parser.add_argument("--profile", default=CHROME_PROFILE, help=f"Chrome プロファイル名（デフォルト: {CHROME_PROFILE}）")
    args = parser.parse_args()

    # テキスト取得
    if args.text:
        text = args.text
    else:
        if sys.stdin.isatty():
            print("投稿テキストを入力してください（Ctrl+D で確定）:")
        text = sys.stdin.read().strip()

    if not text:
        print("エラー: テキストが空です")
        sys.exit(1)

    if len(text) > 280:
        print(f"エラー: テキストが 280 文字を超えています（{len(text)} 文字）")
        sys.exit(1)

    # プロファイル名の上書き
    if args.profile != CHROME_PROFILE:
        globals()["CHROME_PROFILE"] = args.profile

    # 投稿実行
    with sync_playwright() as p:
        browser = None
        context = None

        try:
            if args.mode == "cdp":
                browser, context, page = connect_via_cdp(p)
            elif args.mode == "profile":
                browser, context, page = connect_via_profile(p)
            else:  # auto
                browser, context, page = connect_auto(p)

            success = post_tweet(page, text, dry_run=args.dry_run)
            sys.exit(0 if success else 1)

        except (ConnectionError, RuntimeError) as e:
            print(f"\nエラー: {e}")
            sys.exit(1)
        finally:
            if context:
                try:
                    context.close()
                except Exception:
                    pass


if __name__ == "__main__":
    main()
