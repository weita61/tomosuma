// ============================================================
//  data.js — コンテンツの更新はここだけ触ればOK！
// ============================================================

// ----------------------------------------------------------------
//  NEWS データ
//  追加方法: 配列の先頭に { ... } を1つ追加するだけ
// ----------------------------------------------------------------
// news.html は BLOG_DATA を参照する
const BLOG_DATA = [
  {
    id: 4,
    date: "2026-05-06",
    category: "イベント",
    eyecatch: "assets/globalai-event-0506.jpg",
    title: "グローバルアイ管理寮にて技能実習生との交流活動を実施",
    excerpt: "カレー作り・お餅作り・折り紙・人間知恵の輪を通じた交流を実施。政治家・NPO代表も参加し、千葉ローカルテレビの取材が入りました。",
    body: "<p>NPO法人グローバルアイのご協力のもと、技能実習生の方々とカレー作り・お餅作り・折り紙・人間知恵の輪を楽しみました。</p><p>政治家の方やNPO代表の松本様も参加。千葉のローカルテレビの取材も入りました。</p>",
    author: "渡辺 瑛太",
    readTime: "2 min",
    link: null
  },
  {
    id: 2,
    date: "2026-03-15",
    category: "開発",
    eyecatch: null,
    title: "アプリ開発チームが本格始動",
    excerpt: "JapanLife・WithSmile Appの開発チームが始動。6〜7月のビジコンに向けてMVP開発を進めています。",
    body: "<p>JapanLife・WithSmile Appの開発チームが始動。6〜7月のビジコンに向けてMVP開発を進めています。</p>",
    author: "渡辺 瑛太",
    readTime: "1 min",
    link: null
  },
  {
    id: 3,
    date: "2026-03-10",
    category: "お知らせ",
    eyecatch: "assets/globalai-visit-0319.jpg",
    title: "グローバルアイ施設訪問を実施",
    excerpt: "千葉県成田市のNPO法人グローバルアイ施設を訪問。技能実習生の皆さんと初めて顔を合わせ、活動のきっかけとなった日です。",
    body: "<p>千葉県成田市にあるNPO法人グローバルアイの施設を訪問しました。施設で生活する技能実習生の方々と初めて顔を合わせ、直接話を聞く機会をいただきました。</p><p>この日の出会いがトモスマの活動の原点となっています。</p>",
    author: "渡辺 瑛太",
    readTime: "1 min",
    link: null
  },
  {
    id: 1,
    date: "2026-03-01",
    category: "お知らせ",
    eyecatch: "assets/tomosuma-logo.png",
    title: "トモスマ 公式サイトをオープンしました",
    excerpt: "2026年3月、トモスマの公式ウェブサイトを公開しました。今後はこちらで活動報告やイベント情報をお届けします。",
    body: "<p>2026年3月、トモスマの公式ウェブサイトを公開しました。今後はこちらで活動報告やイベント情報をお届けします。</p>",
    author: "渡辺 瑛太",
    readTime: "1 min",
    link: null
  },
];

// ----------------------------------------------------------------
//  EVENTS データ
//  status: "upcoming"（予定）/ "past"（終了）
// ----------------------------------------------------------------
const EVENTS_DATA = [
  {
    id: 1,
    status: "upcoming",
    date: "2026-05-10",
    time: "13:00 – 17:00",
    title: "第1回 ビーチバレー交流イベント",
    category: "スポーツ",
    location: "お台場海浜公園（東京都港区）",
    description: "技能実習生×トモスマメンバーによるビーチバレーボール交流イベント。言語や立場を超えて対等に関わり合う場をつくります。",
    capacity: "30名",
    fee: "無料",
    applyLink: "https://instagram.com/"   // 申し込みリンク（Googleフォームなど）
  },
  {
    id: 2,
    status: "upcoming",
    date: "2026-05-24",
    time: "10:00 – 14:00",
    title: "実習生向け 無料スポーツ大会",
    category: "スポーツ",
    location: "都内公園（詳細は後日公開）",
    description: "技能実習生の方々を対象にした無料のスポーツイベントです。フットサルを中心に、楽しく交流できる場を提供します。",
    capacity: "50名",
    fee: "無料",
    applyLink: "https://instagram.com/"
  },
  {
    id: 3,
    status: "past",
    date: "2026-03-15",
    time: "19:00 – 21:00",
    title: "創設メンバー キックオフミーティング",
    category: "内部",
    location: "オンライン（Zoom）",
    description: "トモスマの方向性・ロードマップを共有した初回ミーティングを実施しました。",
    capacity: "—",
    fee: "—",
    applyLink: null
  },
];

// ----------------------------------------------------------------
//  ユーティリティ関数（触らなくてOK）
// ----------------------------------------------------------------
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function categoryColor(cat) {
  const map = {
    "お知らせ": "tag",
    "メディア":  "tag-yellow",
    "イベント":  "tag-accent",
    "開発":      "tag",
    "交流会":    "tag-accent",
    "スポーツ":  "tag-yellow",
    "内部":      "tag",
  };
  return map[cat] || "tag";
}
