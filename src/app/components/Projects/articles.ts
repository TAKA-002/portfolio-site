interface articleItem {
  id: string;
  slug: string,
  title: string;
  description: string;
  image: string;
  overview: {
    text: string,
    tags: string[],
    period: string,
    role: string,
    team: string,
    links: {
      sourceUrl: string,
      pageUrl: string,
    }
  },
  highlights: Highlights[],
}

interface Highlights {
  heading: string;
  icon: string;
  summary: string;
  tasks: string[];
  code: string;
}

export const projectArticles: articleItem[] = [
  {
    id: "1",
    slug: "bdc-lp",
    title: "BDC ピラティス LPページコーディング",
    description: "静的ファイルでの書き出しを目指してEJSを採用いたしました。開発環境をシンプルに構築できる点も魅力でした。JS、CSSのバンドルも含めてWebpackを活用し、効率化を実現しました。",
    image: "/images/tmb/tmb_bdcpilates.avif",
    overview: {
      text: "知人のディレクターからの依頼をいただき、LPページ全体のコーディングを実施しました。このタスクはコーディング期間が5日程用意されておりましたが、「コアウェブバイタルで高得点を目指すように」とのご連絡をいただいていました。そのため、「静的HTMLファイルを出力」「CSS設計はBEM」「SCSSを使用」「バンドルファイルでファイル容量と通信回数を軽減」という最低限の開発環境を構築してコーディングを行いました。",
      tags: ["Webpack", "EJS", "SCSS"],
      period: "2024.06",
      role: "コーディング",
      team: "2名（ディレクションはもう1名が担当）",
      links: {
        sourceUrl: "",
        pageUrl: "https://bdcpilates.com/for_beginners"
      }
    },
    highlights: [
      {
        heading: "コーディング環境",
        icon: "",
        summary: "HTML、CSS、JSという成果物に対する開発中の差分を正確に把握し、意図しない差分（インデントや、改行箇所の変更）が紛れ込む状況を減らしました。これによりコーディングスピードを維持することができたと思います。フォーマッタ、リンター、バンドラー、タスクランナーの設定ファイルを理解しておくことの重要性を再確認できました。また、セクション内HTMLに反映する情報を、JSONファイルにて一言管理することで、確認箇所の統一化ができてスピードアップが図れたと思います。",
        tasks: ["webpackとgulpによるEJS、CSS、JSのバンドルファイル生成", "stylelintによる最低限のCSSチェックと並び順の統一", "JSONによるデータの一元管理"],
        code: "//gulpfile.jsのHTML生成タスク\nconst createIndexPage = (done) => {\n  const pageData = JSON.parse(\n    fs.readFileSync(\"./src/ejs/data/pageData.json\", \"utf-8\")\n  );\n  gulp\n    .src([\"./src/ejs/index.ejs\", \"!\" + \"./src/_inc/**/_*.ejs\"])\n    .pipe(\n      ejs({\n        pageData,\n      })\n    )\n    .pipe(plumber())\n    .pipe(\n      htmlbeautify({\n        indent_size: 2,\n        indent_char: \" \",\n        max_preserve_newlines: 0,\n        preserve_newlines: false,\n        indent_inner_html: false,\n        extra_liners: [\n          \"head\",\n          \"body\",\n          \"html\",\n          \"section\",\n          \"aside\",\n          \"header\",\n          \"footer\",\n        ],\n      })\n    )\n    .pipe(\n      rename({\n        basename: \"index\",\n        extname: \".html\",\n      })\n    )\n    .pipe(gulp.dest(\"../\"))\n    .on(\"end\", done);\n};"
      }
    ],
  },
  {
    id: "2",
    slug: "text-manipulator",
    title: "Text Manipulator App",
    description: "テキストの置換、改行除去、スペース除去、文字列変換などをリアクティブに実現することを目標に開発しました。Electronを利用してWEBアプリとしてだけでなく、M系Mac・intel系Macのアプリとして生成できるようにしました。",
    image: "/images/tmb/tmb_text-manipulator.avif",
    overview: {
      text: "lorem",
      tags: ["Webpack", "React", "Tailwind", "Electron"],
      period: "2024.09 〜",
      role: "コーディング、デザイン",
      team: "2名（ロゴ制作は依頼）",
      links: {
        sourceUrl: "https://github.com/TAKA-002/text-manipulator",
        pageUrl: "https://miu-parts.work/text-manipulator/"
      }
    },
    highlights: [
      {
        heading: "認証システムの実装",
        icon: "",
        summary: "lorem",
        tasks: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", "ccccccccccccccccccccccc"],
        code: "",
      },
      {
        heading: "認証システムの実装",
        icon: "",
        summary: "lorem",
        tasks: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", "ccccccccccccccccccccccc"],
        code: "",
      }
    ],
  },
  {
    id: "3",
    slug: "image-creator",
    title: "image-creator Web App",
    description: "「特定の画像をデータ入力をすれば作成できるツールがほしい」との要望の実現を目指して開発しました。MAMPのローカルサーバーで起動します。PHP側は、更新されたJSONファイルの生成に使用し、画面表示をJSが担当するようにしました。CRUDの機能を構築したアプリとなりました。",
    image: "/images/tmb/tmb_image-creator.avif",
    overview: {
      text: "lorem",
      tags: ["PHP", "JavaScript", "jQuery", "Tailwind"],
      period: "2022.07 ~",
      role: "コーディング、デザイン",
      team: "完全個人制作",
      links: {
        sourceUrl: "https://github.com/TAKA-002/image-creator",
        pageUrl: ""
      }
    },
    highlights: [
      {
        heading: "認証システムの実装",
        icon: "",
        summary: "lorem",
        tasks: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", "ccccccccccccccccccccccc"],
        code: "",
      }
    ],
  },
  {
    id: "4",
    slug: "senkyo-web",
    title: "選挙WEB 各種ページ制作・運用",
    description: "業務において様々な経験をさせていただいたWEBサイト。各ページごとに開発環境をもつことで、CSSやJSの影響範囲を限定させながら構築した部分が多いです。大型選挙の特設サイトや、各選挙の一部ページなど、管轄外のページがありつつも、全体的に管理運用を行ってきました。",
    image: "http://www.nhk.or.jp/senkyo/images/ogimage.png",
    overview: {
      text: "lorem",
      tags: ["Webpack", "JavaScript", "jQuery", "React", "HTML", "EJS", "CSS", "SCSS", "Tailwind"],
      period: "2021.02 - 2025.02",
      role: "コーディング",
      team: "4名",
      links: {
        sourceUrl: "",
        pageUrl: "https://www.nhk.or.jp/senkyo/"
      }
    },
    highlights: [
      {
        heading: "認証システムの実装",
        icon: "",
        summary: "lorem",
        tasks: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", "ccccccccccccccccccccccc"],
        code: "",
      }
    ],
  },
  {
    id: "5",
    slug: "worldcup-2022",
    title: "サッカーワールドカップ2022 WebAPI データ処理",
    description: "WebAPI経由でJSONデータを取得し、DOMを構築する処理を担当。掲載情報は、試合日時などの要因から自動で切り替わるように開発しました。試合ごとのページでは、試合進行に合わせてリアルタイムで表示更新が行われるように構築しました。一つのUIを構築するために複数のデータから必要情報を取得して来る必要があり、プロミス処理について深く考えさせられました。",
    image: "http://www3.nhk.or.jp/news/special/soccer_worldcup/2022/images/og_image.jpg",
    overview: {
      text: "lorem",
      tags: ["Webpack", "JavaScript", "jQuery"],
      period: "2022.08 - 2022.12",
      role: "コーディング",
      team: "6名",
      links: {
        sourceUrl: "",
        pageUrl: "https://www3.nhk.or.jp/news/special/soccer_worldcup/"
      }
    },
    highlights: [
      {
        heading: "認証システムの実装",
        icon: "",
        summary: "lorem",
        tasks: ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", "ccccccccccccccccccccccc"],
        code: "",
      }
    ],
  }
]
