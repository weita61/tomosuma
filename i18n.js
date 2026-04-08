// ============================================================
//  i18n.js — 日英切り替え
//  使い方: 翻訳したい要素に data-i18n="key" を付けるだけ
//         innerHTML ごと置換したい要素は data-i18n-html="key"
// ============================================================

const I18N = {
  ja: {
    /* ─── 共通ナビ ─── */
    'nav.philosophy': '3つの哲学',
    'nav.service':    'メイン事業',
    'nav.roadmap':    'ロードマップ',
    'nav.team':       'チーム',
    'nav.events':     'イベント',
    'nav.news':       'News',
    'nav.join':       '参加する',
    'nav.join_btn':   '仲間になる',
    'nav.back':       '← トップへ',

    /* ─── index.html — ヒーロー ─── */
    'hero.badge':    '🌍 With Smile &amp; Beyond — 2026年3月 設立',
    'hero.title':    'どこにいても、<br>笑顔と<span class="accent">「共にある」</span><br>未来を創る。',
    'hero.subtitle': 'テクノロジーと人のつながりで、世界中の笑顔を守り、未来を灯すプロジェクト。',
    'hero.btn.service': 'メイン事業を見る',
    'hero.btn.join':    '仲間になる',
    'hero.visual':      '[ Hero Image / Movie — 後で差し替え ]',

    /* ─── フィロソフィー ─── */
    'phil.label': 'Philosophy',
    'phil.title': '3つの定義・哲学',
    'phil.body':  '「友」「共に」「灯す」——3つのアプローチを並行して動かすことで、笑顔の総量を増やし、守り抜きます。',
    'phil.c1.title': '友（トモ）× Smile',
    'phil.c1.tag':   'コミュニティ・アクション',
    'phil.c1.body':  'スポーツイベント・多文化交流会を通じ、言語や立場の壁を越えて「対等な友」としての一生モノの絆を築く場を提供します。',
    'phil.c2.title': '共に（トモに）× Smile',
    'phil.c2.tag':   'テクノロジー・イノベーション',
    'phil.c2.body':  '五感同期デバイス（Heart-to-Heart Device）で、鼓動・温もり・気配を届け、空間の壁を越えた日常共有を実現します。',
    'phil.c3.title': '灯す（トモす）× Smile',
    'phil.c3.tag':   'ソーシャル・デザイン',
    'phil.c3.body':  '政策提言・難民支援へと展開し、社会構造そのものを変えることで、より広範な笑顔を守り続けます。',

    /* ─── サービス ─── */
    'svc.label':    'Main Service',
    'svc.title':    '五感同期デバイス<br>Heart-to-Heart Device',
    'svc.body':     '技能実習生をはじめ「遠く離れた大切な人」をつなぐ、科学と五感テクノロジーの融合デバイス。',
    'svc.f1.title': '鼓動を届ける',
    'svc.f1.body':  'リアルタイムで心拍を伝送し、遠くでも「そこにいる」感覚を実現',
    'svc.f2.title': '温もりを伝える',
    'svc.f2.body':  '温度フィードバックで、触覚的なつながりを提供',
    'svc.f3.title': '気配を感じる',
    'svc.f3.body':  '相手の存在感を日常の空間に溶け込ませる環境センシング',
    'svc.f4.title': 'ESG対応',
    'svc.f4.body':  'メンタルケアによる離職率低下・生産性向上をデータで可視化',
    'svc.visual':   '[ Device Visual / Demo Movie — 後で差し替え ]',

    /* ─── ロードマップ ─── */
    'road.label':     'Roadmap',
    'road.title':     '2026年 ロードマップ',
    'road.m3.badge':  '3月',
    'road.m3.title':  '実地調査',
    'road.m3.body':   '技能実習生をはじめとする人々へのヒアリング。真のニーズ抽出。',
    'road.m4.badge':  '4月',
    'road.m4.title':  'コンセプト実証',
    'road.m4.body':   '有識者によるメインデバイスの要件定義。',
    'road.m5.badge':  '5月',
    'road.m5.title':  'ネットワーク構築',
    'road.m5.body':   '交流イベント開催。エンジニア・運営メンバーの正式募集。',
    'road.m67.badge': '6–7月',
    'road.m67.title': '開発',
    'road.m67.body':  'メイン事業である五感同期デバイスのプロトタイプ制作。',
    'road.m8.badge':  '8月',
    'road.m8.title':  '社会実装',
    'road.m8.body':   'ビジコン出場、およびプロダクトローンチ。',

    /* ─── ステークホルダー ─── */
    'stake.label':    'Stakeholders',
    'stake.title':    '仲間の4つのカタチ',
    'stake.body':     '関わり方に合わせて参加できます。',
    'stake.c1.role':  'Core Member',
    'stake.c1.title': '運営チーム',
    'stake.c1.desc':  'エンジニア・デザイナー・PJメンバー。週1時間のMTGからでも参加OK。',
    'stake.c2.role':  'Supporter',
    'stake.c2.title': '共感者・ファン',
    'stake.c2.desc':  'SNSシェアや単発イベントボランティアとして活動を支援。',
    'stake.c3.role':  'Partner / Sponsor',
    'stake.c3.title': '協力・出資者',
    'stake.c3.desc':  '企業CSR・管理団体。会場・物品・資金など多様な形で参加できます。',
    'stake.c4.role':  'Beneficiary',
    'stake.c4.title': '技能実習生など',
    'stake.c4.desc':  '日本で働く実習生・母国の家族。体験会・スポーツ大会など楽しい入口から。',

    /* ─── チーム ─── */
    'team.label':   'Team',
    'team.title':   'チームメンバー',
    'team.m1.name': '渡辺 瑛太',
    'team.m1.role': '代表',
    'team.m2.name': '秋山たかひで',
    'team.m2.role': '顧問',
    'team.m3.name': 'You?',
    'team.m3.role': 'エンジニア・デザイナー・運営メンバー 募集中',

    /* ─── CTA ─── */
    'cta.label':    'Join Us',
    'cta.title':    '一緒に、笑顔を守ろう。',
    'cta.body':     'エンジニア・デザイナー・応援してくれる人、どんな形でもOKです。',
    'cta.btn.ig':   '📸 Instagram を見る',
    'cta.btn.mail': '✉️ メールで問い合わせ',

    /* ─── フッター ─── */
    'footer.tagline': 'どこにいても、笑顔と「共にある」未来を創る。',
    'footer.copy':    '© 2026 トモスマ（With Smile & Beyond）',
    'footer.founder': '代表：渡辺 瑛太',

    /* ─── news.html ─── */
    'news.label':          'News & Blog',
    'news.title':          '活動レポート',
    'news.body':           'トモスマの活動報告・開発の裏側・代表コラムをお届けします。',
    'news.filter.all':     'すべて',
    'news.filter.notice':  'お知らせ',
    'news.filter.activity':'活動報告',
    'news.filter.dev':     '開発',
    'news.filter.media':   'メディア',
    'news.back_list':      '← 一覧に戻る',
    'news.prev':           '← 前の記事',
    'news.next':           '次の記事 →',

    /* ─── events.html ─── */
    'ev.label':       'Events',
    'ev.title':       'イベント情報',
    'ev.body':        'スポーツ大会・多文化交流会・体験会など、トモスマが開催するイベントをご紹介します。',
    'ev.tab.upcoming':'開催予定',
    'ev.tab.past':    '過去のイベント',
    'ev.e1.tag1':     '募集中',
    'ev.e1.tag2':     'スポーツ',
    'ev.e1.title':    '第1回 トモスマ スポーツ交流大会',
    'ev.e1.date':     '📅 2026年5月 予定（詳細は近日公開）',
    'ev.e1.loc':      '📍 東京都内（会場調整中）',
    'ev.e1.desc':     '国籍・言語の壁を越えて、スポーツで繋がるイベント。技能実習生・学生・社会人、どなたでも参加歓迎です。エンジニア・運営メンバーの募集も同時開催予定。',
    'ev.e1.cap':      '👥 定員：調整中',
    'ev.e1.link':     '詳細・申込 →',
    'ev.e2.tag1':     '企画中',
    'ev.e2.tag2':     '交流会',
    'ev.e2.title':    '多文化交流ナイト Vol.1',
    'ev.e2.date':     '📅 2026年5月〜6月 予定',
    'ev.e2.loc':      '📍 東京都内（未定）',
    'ev.e2.desc':     '様々な国の文化・料理・音楽を楽しみながら交流するナイトイベント。「言葉がなくても笑顔はつながる」をテーマに、対等な友として関係を築く場を作ります。',
    'ev.e2.cap':      '👥 定員：未定',
    'ev.e2.link':     '詳細・申込 →',
    'ev.e3.tag1':     '企画中',
    'ev.e3.tag2':     '体験会',
    'ev.e3.title':    'Heart-to-Heart Device 体験会',
    'ev.e3.date':     '📅 2026年8月 予定',
    'ev.e3.loc':      '📍 東京都内（未定）',
    'ev.e3.desc':     '開発中の五感同期デバイスのプロトタイプを実際に体験できるイベント。「スマホで鼓動が伝わる」感覚を、ぜひ体で感じてみてください。',
    'ev.e3.cap':      '👥 定員：少人数',
    'ev.e3.link':     '詳細・申込 →',
    'ev.empty':       '過去のイベントはまだありません。\n開催後にレポートを掲載します。',
    'ev.vol.label':   'Volunteer',
    'ev.vol.title':   'イベント運営ボランティア募集中',
    'ev.vol.body':    '単発参加OK。一緒にイベントを作り上げましょう。',
    'ev.vol.btn':     '応募する',
  },

  en: {
    /* ─── 共通ナビ ─── */
    'nav.philosophy': 'Philosophy',
    'nav.service':    'Main Service',
    'nav.roadmap':    'Roadmap',
    'nav.team':       'Team',
    'nav.events':     'Events',
    'nav.news':       'News',
    'nav.join':       'Join Us',
    'nav.join_btn':   'Join Us',
    'nav.back':       '← Back to Top',

    /* ─── index.html — ヒーロー ─── */
    'hero.badge':    '🌍 With Smile &amp; Beyond — Founded March 2026',
    'hero.title':    'Wherever you are,<br>a future full of smiles<br>and <span class="accent">"being together."</span>',
    'hero.subtitle': 'A project that uses technology and human connection to protect smiles and light the future worldwide.',
    'hero.btn.service': 'See Our Main Service',
    'hero.btn.join':    'Join Us',
    'hero.visual':      '[ Hero Image / Movie — Coming Soon ]',

    /* ─── フィロソフィー ─── */
    'phil.label': 'Philosophy',
    'phil.title': '3 Definitions & Philosophies',
    'phil.body':  '"Friend," "Together," "Light" — Three parallel approaches to multiply and protect smiles everywhere.',
    'phil.c1.title': 'Friend (Tomo) × Smile',
    'phil.c1.tag':   'Community & Action',
    'phil.c1.body':  'Through sports events and multicultural gatherings, we build lifelong bonds as equals — transcending language and background.',
    'phil.c2.title': 'Together (Tomoni) × Smile',
    'phil.c2.tag':   'Technology & Innovation',
    'phil.c2.body':  'The Heart-to-Heart Device syncs heartbeats, warmth, and presence so loved ones feel close across any distance.',
    'phil.c3.title': 'Light (Tomosu) × Smile',
    'phil.c3.tag':   'Social Design',
    'phil.c3.body':  'By advocating for policy change and supporting refugees, we reshape social structures to protect smiles on a wider scale.',

    /* ─── サービス ─── */
    'svc.label':    'Main Service',
    'svc.title':    'Five-Sense Sync Device<br>Heart-to-Heart Device',
    'svc.body':     'A device merging science and sensory technology to connect migrant workers and loved ones separated by distance.',
    'svc.f1.title': 'Transmit Heartbeat',
    'svc.f1.body':  'Real-time heartbeat streaming so distant loved ones truly feel present',
    'svc.f2.title': 'Share Warmth',
    'svc.f2.body':  'Thermal feedback for a tactile sense of connection',
    'svc.f3.title': 'Feel Presence',
    'svc.f3.body':  "Ambient sensing that weaves a person's presence into everyday surroundings",
    'svc.f4.title': 'ESG Ready',
    'svc.f4.body':  'Data-driven visibility: mental health care that reduces turnover and boosts productivity',
    'svc.visual':   '[ Device Visual / Demo Movie — Coming Soon ]',

    /* ─── ロードマップ ─── */
    'road.label':     'Roadmap',
    'road.title':     '2026 Roadmap',
    'road.m3.badge':  'Mar',
    'road.m3.title':  'Field Research',
    'road.m3.body':   'Interviews with migrant workers and others to uncover genuine needs.',
    'road.m4.badge':  'Apr',
    'road.m4.title':  'Proof of Concept',
    'road.m4.body':   'Requirements definition for the main device with guidance from experts.',
    'road.m5.badge':  'May',
    'road.m5.title':  'Network Building',
    'road.m5.body':   'Community exchange event. Official recruitment of engineers and operations members.',
    'road.m67.badge': 'Jun–Jul',
    'road.m67.title': 'Development',
    'road.m67.body':  'Prototype of the five-sense sync device — our core product.',
    'road.m8.badge':  'Aug',
    'road.m8.title':  'Social Launch',
    'road.m8.body':   'Business competition entry and official product launch.',

    /* ─── ステークホルダー ─── */
    'stake.label':    'Stakeholders',
    'stake.title':    '4 Ways to Get Involved',
    'stake.body':     'Join in whatever way works best for you.',
    'stake.c1.role':  'Core Member',
    'stake.c1.title': 'Operations Team',
    'stake.c1.desc':  'Engineers, designers, project members. Even 1 hour/week is fine.',
    'stake.c2.role':  'Supporter',
    'stake.c2.title': 'Fans & Allies',
    'stake.c2.desc':  'Support via social media shares or as a volunteer at one-off events.',
    'stake.c3.role':  'Partner / Sponsor',
    'stake.c3.title': 'Partners & Investors',
    'stake.c3.desc':  'Corporate CSR or managing organizations — venues, supplies, funding all welcome.',
    'stake.c4.role':  'Beneficiary',
    'stake.c4.title': 'Migrant Workers & Families',
    'stake.c4.desc':  'Trainees working in Japan and their families abroad. Join through events and sports tournaments.',

    /* ─── チーム ─── */
    'team.label':   'Team',
    'team.title':   'Team Members',
    'team.m1.name': 'Eita Watanabe',
    'team.m1.role': 'Founder',
    'team.m2.name': 'Takahide Akiyama',
    'team.m2.role': 'Advisor',
    'team.m3.name': 'You?',
    'team.m3.role': 'Engineers, Designers & Ops Members Wanted',

    /* ─── CTA ─── */
    'cta.label':    'Join Us',
    'cta.title':    "Let's protect smiles together.",
    'cta.body':     'Engineers, designers, supporters — any form of involvement is welcome.',
    'cta.btn.ig':   '📸 Follow on Instagram',
    'cta.btn.mail': '✉️ Send Us a Message',

    /* ─── フッター ─── */
    'footer.tagline': 'Wherever you are, creating a future with smiles and togetherness.',
    'footer.copy':    '© 2026 Tomosuma (With Smile & Beyond)',
    'footer.founder': 'Founder: Eita Watanabe',

    /* ─── news.html ─── */
    'news.label':          'News & Blog',
    'news.title':          'Activity Reports',
    'news.body':           'Activity reports, behind-the-scenes development, and columns from our founder.',
    'news.filter.all':     'All',
    'news.filter.notice':  'Notice',
    'news.filter.activity':'Activity',
    'news.filter.dev':     'Development',
    'news.filter.media':   'Media',
    'news.back_list':      '← Back to List',
    'news.prev':           '← Previous',
    'news.next':           'Next →',

    /* ─── events.html ─── */
    'ev.label':       'Events',
    'ev.title':       'Event Information',
    'ev.body':        'Sports tournaments, multicultural exchanges, demo experiences, and more — explore events hosted by Tomosuma.',
    'ev.tab.upcoming':'Upcoming',
    'ev.tab.past':    'Past Events',
    'ev.e1.tag1':     'Recruiting',
    'ev.e1.tag2':     'Sports',
    'ev.e1.title':    '1st Tomosuma Sports Exchange Tournament',
    'ev.e1.date':     '📅 May 2026 (details coming soon)',
    'ev.e1.loc':      '📍 Tokyo (venue TBD)',
    'ev.e1.desc':     'An event connecting people through sports regardless of nationality or language. Trainees, students, and working adults all welcome. Engineer & ops recruitment also planned.',
    'ev.e1.cap':      '👥 Capacity: TBD',
    'ev.e1.link':     'Details & Sign Up →',
    'ev.e2.tag1':     'Planning',
    'ev.e2.tag2':     'Exchange',
    'ev.e2.title':    'Multicultural Exchange Night Vol.1',
    'ev.e2.date':     '📅 May–June 2026 (tentative)',
    'ev.e2.loc':      '📍 Tokyo (venue TBD)',
    'ev.e2.desc':     'A night event enjoying food, music, and culture from around the world. Themed "Smiles connect even without words" — building equal friendships across borders.',
    'ev.e2.cap':      '👥 Capacity: TBD',
    'ev.e2.link':     'Details & Sign Up →',
    'ev.e3.tag1':     'Planning',
    'ev.e3.tag2':     'Demo',
    'ev.e3.title':    'Heart-to-Heart Device Demo Experience',
    'ev.e3.date':     '📅 August 2026 (tentative)',
    'ev.e3.loc':      '📍 Tokyo (venue TBD)',
    'ev.e3.desc':     'Try the prototype five-sense sync device currently in development. Experience what it feels like when a heartbeat is transmitted through your phone.',
    'ev.e3.cap':      '👥 Capacity: Small group',
    'ev.e3.link':     'Details & Sign Up →',
    'ev.empty':       'No past events yet.\nReports will be posted after events conclude.',
    'ev.vol.label':   'Volunteer',
    'ev.vol.title':   'Event Volunteers Wanted',
    'ev.vol.body':    'One-time participation welcome. Help us create amazing events together.',
    'ev.vol.btn':     'Apply Now',
  }
};

/* ─── i18n エンジン ─────────────────────────────────────── */
const Lang = {
  current: localStorage.getItem('lang') || 'ja',

  set(lang) {
    this.current = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    this._syncBtns();
  },

  t(key) {
    return (I18N[this.current] || I18N.ja)[key] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });
  },

  _syncBtns() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  }
};

/* ─── 初期化 ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = Lang.current;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === Lang.current);
    btn.addEventListener('click', () => Lang.set(btn.dataset.lang));
  });
  Lang.apply();
});
