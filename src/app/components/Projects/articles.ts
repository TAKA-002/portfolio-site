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
        tasks: ["webpackとgulpによるEJS、CSS、JSのバンドルファイル生成", "stylelintによるCSSチェックとCSSプロパティの並び順の統一", "JSONによる掲載情報の構造化と一元管理"],
        code: "//gulpfile.jsのHTML生成タスク\nconst createIndexPage = (done) => {\n  const pageData = JSON.parse(\n    fs.readFileSync(\"./src/ejs/data/pageData.json\", \"utf-8\")\n  );\n  gulp\n    .src([\"./src/ejs/index.ejs\", \"!\" + \"./src/_inc/**/_*.ejs\"])\n    .pipe(\n      ejs({\n        pageData,\n      })\n    )\n    .pipe(plumber())\n    .pipe(\n      htmlbeautify({\n        indent_size: 2,\n        indent_char: \" \",\n        max_preserve_newlines: 0,\n        preserve_newlines: false,\n        indent_inner_html: false,\n        extra_liners: [\n          \"head\",\n          \"body\",\n          \"html\",\n          \"section\",\n          \"aside\",\n          \"header\",\n          \"footer\",\n        ],\n      })\n    )\n    .pipe(\n      rename({\n        basename: \"index\",\n        extname: \".html\",\n      })\n    )\n    .pipe(gulp.dest(\"../\"))\n    .on(\"end\", done);\n};"
      }
    ],
  },
  {
    id: "2",
    slug: "text-manipulator",
    title: "Text Manipulator App",
    description: "テキストの置換、改行除去、スペース除去、文字列変換などをリアクティブに実現することを目標に開発しました。Electronを利用してWebアプリとしてだけでなく、M系Mac・intel系Macのアプリとして生成できるようにしました。",
    image: "/images/tmb/tmb_text-manipulator.avif",
    overview: {
      text: "「業務効率を改善したい」「情報管理をより安全にしたい」と考え、「世の中にある既存のWebアプリを使用したテキストの操作を行わないようにしたい」と考えていました。そこで、自作しようと思い、作成したネイティブアプリになります。Webアプリではなく、Electronを使用したネイティブアプリとした理由は、「Webブラウザを使用することによるブラウザのタブ増加を嫌った」「アプリを使用するためにブラウザを経由するという、ユーザーアクションの増加を防ぎたい」と考えたからです。（※現在アプリをGitHubでreleaseしても、配布にはApple Developerのライセンスが必要のようで、サーバーアップしてます。）",
      tags: ["Webpack", "React", "Tailwind", "Electron"],
      period: "2024.09 〜 更新中",
      role: "コーディング、デザイン",
      team: "2名（1名はロゴ制作）",
      links: {
        sourceUrl: "https://github.com/TAKA-002/text-manipulator",
        pageUrl: "https://miu-parts.work/text-manipulator/"
      }
    },
    highlights: [
      {
        heading: "リアクティブアプリ実装",
        icon: "",
        summary: "Reactのフックを利用したリアクティブな挙動を目指して開発しました。「操作対象のテキストを入力」「全角半角の変換方向の切替」「置換テキストを入力」「チェックボックスの操作」など、ユーザー側のひとつひとつのアクションを、結果にリアルタイムに反映できるようにしました。",
        tasks: ["createContextを使用し、各コンポーネントからuseContextを用いてstateにアクセス", "propsのバケツリレーを防止", "appコンポーネントでstateの値に応じた挙動の管理"],
        code: "export function App() {\n \n// 入力欄に入れられた値を格納\nconst [inputValue, setInputValue] = useState(\"\");\n// 変換された値を格納\nconst [convertedValue, setConvertedValue] = useState(\"\");\n\n// fromに置換対象の文字格納。toに変換後の文字格納\nconst [replaceObject, setReplaceObject] = useState({ from: \"\", to: \"\" });\n// 置換した文字列を格納\nconst [replacedValue, setReplacedValue] = useState(\"\");\n// 置換実施有無管理\nconst [isReplace, setIsReplace] = useState(false);\n\n// 削除オプション\n// RemoveOptionコンポーネントで使用。改行を除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある\nconst [isRemoveBr, setIsRemoveBr] = useState(false);\n// RemoveOptionコンポーネントで使用。スペースを除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある\nconst [isRemoveSpace, setIsRemoveSpace] = useState(false);\n\n// 変換方向オプション\nconst [conversionDirection, setConversionDirection] = useState(\"fullToHalf\");\n// 変換対象オプション\nconst [isConversionAll, setIsConversionAll] = useState(false);\nconst [isConversionEng, setIsConversionEng] = useState(false);\nconst [isConversionNum, setIsConversionNum] = useState(false);\nconst [isConversionSymbol, setIsConversionSymbol] = useState(false);\nconst [isConversionSpace, setIsConversionSpace] = useState(false);\n\n// トースト通知\nconst [toastKind, setToastKind] = useState(\"\");\nconst [isToast, setIsToast] = useState(false);\n\n・・・・省略・・・・\n\n return (\n    <MyContext.Provider\n      value={{\n        inputValue,\n        setInputValue,\n        convertedValue,\n        setConvertedValue,\n        replaceObject,\n        setReplaceObject,\n        conversionDirection,\n        setConversionDirection,\n        isConversionAll,\n        setIsConversionAll,\n        isConversionEng,\n        setIsConversionEng,\n        isConversionNum,\n        setIsConversionNum,\n        isConversionSymbol,\n        setIsConversionSymbol,\n        isConversionSpace,\n        setIsConversionSpace,\n        isRemoveBr,\n        setIsRemoveBr,\n        isRemoveSpace,\n        setIsRemoveSpace,\n        handleCopy,\n        handleClear,\n      }}\n    >\n      <Toast isToast={isToast} toastKind={toastKind} />\n      <Heading />\n      <Version />\n      <Container />\n    </MyContext.Provider>\n  );\n}",
      },
      {
        heading: "キーボードショートカットの追加",
        icon: "",
        summary: "変換後のテキストのクリップボードへのコピーと、入力値のクリアをキーボードショートカットにて実装しました。「マウス操作でボタンを押す」以外の操作でも操作可能。",
        tasks: ["コンポーネントのマウント時にイベントリスナーの設置と、発火したらクリーンアップの実施"],
        code: "// コンポーネントのマウントに合わせ、イベントリスナーを追加し、発火でイベントリスナーをクリーンアップ\nuseEffect(() => {\n    const handleKeyDown = (e) => {\n      if (e.shiftKey) {\n        if (e.key === \"Enter\") {\n          e.preventDefault();\n          handleCopy(convertedValue);\n        } else if (e.key === \"Backspace\") {\n          e.preventDefault();\n          handleClear();\n        }\n      }\n    };\n    window.addEventListener(\"keydown\", handleKeyDown);\n    return () => window.removeEventListener(\"keydown\", handleKeyDown);\n  }, [handleCopy, convertedValue, handleClear]);",
      },
      {
        heading: "ユーザー操作の結果通知最適化",
        icon: "",
        summary: "アラートを使用する事によるユーザーアクション(クリック)の増加を防止するためにトースト通知を採用。",
        tasks: ["通知実施後、一定時間後に通知の自動消滅"],
        code: "useEffect(() => {\n    let timer;\n    if (isToast) {\n      timer = setTimeout(() => {\n        setIsToast(false);\n        setToastKind(\"\");\n      }, 1500);\n    }\n    return () => clearTimeout(timer);\n  }, [isToast]);",
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
