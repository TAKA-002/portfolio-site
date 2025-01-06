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
  highlights?: Highlights[],
}

interface Highlights {
  heading: string;
  icon: string;
  summary: string;
  tasks: string[];
  link: string;
  image: string;
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
        link: "",
        image: "",
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
        link: "",
        image: "/images/tmb/tmb_text-manipulator.avif",
        code: "export function App() {\n \n// 入力欄に入れられた値を格納\nconst [inputValue, setInputValue] = useState(\"\");\n// 変換された値を格納\nconst [convertedValue, setConvertedValue] = useState(\"\");\n\n// fromに置換対象の文字格納。toに変換後の文字格納\nconst [replaceObject, setReplaceObject] = useState({ from: \"\", to: \"\" });\n// 置換した文字列を格納\nconst [replacedValue, setReplacedValue] = useState(\"\");\n// 置換実施有無管理\nconst [isReplace, setIsReplace] = useState(false);\n\n// 削除オプション\n// RemoveOptionコンポーネントで使用。改行を除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある\nconst [isRemoveBr, setIsRemoveBr] = useState(false);\n// RemoveOptionコンポーネントで使用。スペースを除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある\nconst [isRemoveSpace, setIsRemoveSpace] = useState(false);\n\n// 変換方向オプション\nconst [conversionDirection, setConversionDirection] = useState(\"fullToHalf\");\n// 変換対象オプション\nconst [isConversionAll, setIsConversionAll] = useState(false);\nconst [isConversionEng, setIsConversionEng] = useState(false);\nconst [isConversionNum, setIsConversionNum] = useState(false);\nconst [isConversionSymbol, setIsConversionSymbol] = useState(false);\nconst [isConversionSpace, setIsConversionSpace] = useState(false);\n\n// トースト通知\nconst [toastKind, setToastKind] = useState(\"\");\nconst [isToast, setIsToast] = useState(false);\n\n・・・・省略・・・・\n\n return (\n    <MyContext.Provider\n      value={{\n        inputValue,\n        setInputValue,\n        convertedValue,\n        setConvertedValue,\n        replaceObject,\n        setReplaceObject,\n        conversionDirection,\n        setConversionDirection,\n        isConversionAll,\n        setIsConversionAll,\n        isConversionEng,\n        setIsConversionEng,\n        isConversionNum,\n        setIsConversionNum,\n        isConversionSymbol,\n        setIsConversionSymbol,\n        isConversionSpace,\n        setIsConversionSpace,\n        isRemoveBr,\n        setIsRemoveBr,\n        isRemoveSpace,\n        setIsRemoveSpace,\n        handleCopy,\n        handleClear,\n      }}\n    >\n      <Toast isToast={isToast} toastKind={toastKind} />\n      <Heading />\n      <Version />\n      <Container />\n    </MyContext.Provider>\n  );\n}",
      },
      {
        heading: "キーボードショートカットの追加",
        icon: "",
        summary: "変換後のテキストのクリップボードへのコピーと、入力値のクリアをキーボードショートカットにて実装しました。「マウス操作でボタンを押す」以外の操作でも操作可能。",
        tasks: ["コンポーネントのマウント時にイベントリスナーの設置と、発火したらクリーンアップの実施"],
        link: "",
        image: "",
        code: "// コンポーネントのマウントに合わせ、イベントリスナーを追加し、発火でイベントリスナーをクリーンアップ\nuseEffect(() => {\n    const handleKeyDown = (e) => {\n      if (e.shiftKey) {\n        if (e.key === \"Enter\") {\n          e.preventDefault();\n          handleCopy(convertedValue);\n        } else if (e.key === \"Backspace\") {\n          e.preventDefault();\n          handleClear();\n        }\n      }\n    };\n    window.addEventListener(\"keydown\", handleKeyDown);\n    return () => window.removeEventListener(\"keydown\", handleKeyDown);\n  }, [handleCopy, convertedValue, handleClear]);",
      },
      {
        heading: "ユーザー操作の結果通知最適化",
        icon: "",
        summary: "アラートを使用する事によるユーザーアクション(クリック)の増加を防止するためにトースト通知を採用。",
        tasks: ["通知実施後、一定時間後に通知の自動消滅"],
        link: "",
        image: "",
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
      text: "特定の曜日に特定のサイト内に設置する定型の画像作成というタスクがあり、それをデータ入力のみで作成できるようにしました。入力したデータはJSONデータで保存されており、Gitを経由することで、他者にも進捗を共有できるようになりました。",
      tags: ["PHP", "JavaScript", "jQuery", "Tailwind"],
      period: "2022.07 ~",
      role: "コーディング、デザイン",
      team: "完全個人制作",
      links: {
        sourceUrl: "https://github.com/TAKA-002/image-creator",
        pageUrl: ""
      }
    },
    highlights: undefined,
  },
  {
    id: "4",
    slug: "senkyo-web",
    title: "選挙WEB 各種ページ制作・運用",
    description: "業務において様々な経験をさせていただいたWEBサイト。各ページごとに開発環境をもつことで、CSSやJSの影響範囲を限定させながら構築した部分が多いです。大型選挙の特設サイトや、各選挙の一部ページなど、管轄外のページがありつつも、全体的に管理運用を行ってきました。",
    image: "http://www.nhk.or.jp/senkyo/images/ogimage.png",
    overview: {
      text: "NHK全体における「選挙情報をまとめて掲載するWEBサイト」としてこちらのページが存在してます。日本中の選挙の予定、NHKが注目している選挙のコンテンツ掲載、選挙の知識やアンケート情報などのページ作成、大型選挙の議席獲得状況や、立候補者の情報を発信するための特設サイトの運用などがメイン業務でした。とにかく情報を正確に掲載することが求められました。",
      tags: ["Webpack", "JavaScript", "jQuery", "React", "HTML", "EJS", "CSS", "SCSS"],
      period: "2021.02 - 現在",
      role: "コーディング",
      team: "4名",
      links: {
        sourceUrl: "",
        pageUrl: "https://www.nhk.or.jp/senkyo/"
      }
    },
    highlights:
      [
        {
          heading: "WEBサイトトップページの更新業務",
          icon: "",
          summary: "選挙WEBのトップページは、いくつかのセクションに分かれていますが、これを１つのxmlファイルに情報をまとめて動的にページを生成しています。",
          tasks: ["xmlファイルをベースに必要なセクションの動的生成", "非同期処理によるsectionタグ作成、section内部のDOM構造の生成などの処理の整理", "クラスのインスタンスによる情報の管理"],
          link: "https://www.nhk.or.jp/senkyo/",
          image: "",
          code: "const initDataProcess = new getDataProcess();\n\n    initDataProcess\n      .getDataPromise(INDEX_XML_PATH, 'xml') // xmlの取得\n      .then(() => {\n        // xmlデータをajax_dataに格納後、sectionタグ（HTML）を生成\n        return createSectionTag(initDataProcess.ajax_data);\n      })\n      .then(() => {\n        // sectionタグ（HTML）生成後、sectionの中身の生成\n        // createMainTagの中で、各セクション内部DOM生成を実施。すべて完了したらresolveを返す。\n        return createMainTag(initDataProcess.ajax_data);\n      })\n      .then(() => {\n        createSlideshow(); // スライド起動\n        // 予定の部分の生成をするが、スクロールが予定の部分まで達した時に生成したい\n        const elemOfIntresect = document.getElementsByTagName('section');\n        for (let i = 0; i < elemOfIntresect.length; i++) {\n          observer.observe(elemOfIntresect[i]);\n        }\n        resolve();\n      })\n      .catch(e => {\n        console.log(e);\n        const main = document.getElementById('main');\n        main.insertAdjacentHTML(\n          'afterbegin',\n          '<p>データの取得に失敗しました。リロードをしてください</p>'\n        );\n        reject('要素の取得生成に失敗しました。');\n      });",
        },
      ]
    ,
  },
  {
    id: "5",
    slug: "chief-questionnaire",
    title: "NHK 選挙WEB 全国首長アンケート",
    description: "NHKは、2023年の統一地方選挙に伴い、全国1788自治体の長に対してアンケートを行いました。各自治体の回答を掲載するページを、1788自治体分作成しました。1788ページ分のHTMLファイルと、回答を反映させるということで、工夫した点を記載いたします。",
    image: "https://www.nhk.or.jp/senkyo-data/chief-questionnaire/2023/images/tmb-prefecture.jpg",
    overview: {
      text: "ページは、トップページ、検索ページ、県トップページ、各自治体回答ページと多岐にわたっています。その中で、特に比重を置かなければならないのが、回答を正確に出力しなければならないことと、ユーザーの利便性を高めることでした。回答を正確に出力するという部分では、知事、市区町、町村長など、立場が違う方々へそれぞれの質問があるため、必要な情報は正確に出力し、不要な情報は非表示するという分岐を正確に組まなければならない。ユーザーへは自治体名検索を使用していただくことで居住している自治体を早く見つけられるようにしました。",
      tags: ["Webpack", "JavaScript", "jQuery", "EJS", "SCSS"],
      period: "2023.02 - 2023.04",
      role: "コーディング",
      team: "3名",
      links: {
        sourceUrl: "",
        pageUrl: "https://www.nhk.or.jp/senkyo/chief-questionnaire/2023/prefectures/"
      }
    },
    highlights: [
      {
        heading: "自治体名検索機能の追加",
        icon: "",
        summary: "こちらのアンケートは全自治体の長におこなっていることもあり、非常に膨大なページが存在しています。それを自治体名から検索できるようにしました。とくに、複数検索にも対応できるようにしました。一般的にgoogle検索ではスペースで検索キーワードを複数設置すると思います。こちらのページでも複数ワードでの検索ができるように、入力値からあらゆるケースを考え、不要な情報を除去し、必要な状態にするように努めました。",
        tasks: ["入力値をパラメーターでGETメソッドでの受け渡し", "パラメーターの、全半角スペースなどの処理"],
        link: "",
        image: "",
        code: "const getParameterChars = (parameters) => {\n  // 検索ワードを抽出する\n  return extractWords(decodeURI(parameters));\n}\n/**\n * 検索ワードを抽出する\n * @param {string} parameters - デコードされた文字列「?sw=」以降\n * @returns {Array} - 1つでも配列で戻す\n */\nfunction extractWords(parameters) {\n  // 全角スペースをすべて半角スペースに変換。\n  const replacedSpaceParam = parameters.replace(/　+|\\++/g, \" \")\n  // 今回inputは1つなのは確定なので、「?」も一緒に除去。\n  const removedKeywordParam = replacedSpaceParam.replace(/\\?[a-z]{2}\\=/g, \"\")\n  // 文字列の先頭の半角スペースがあれば除去\n  const removedFstSpaceParam = removedKeywordParam.replace(/^ */g, \"\");\n  // 文字列の先頭の半角スペースがあれば除去\n  const removedFstPlusParam = removedFstSpaceParam.replace(/^\\+*/g, \"\");\n  // 文字列の最後に半角スペースがあれば除去\n  const removedLstSpaceParam = removedFstPlusParam.replace(/ *$/g, \"\");\n  // 文字列の最後に半角スペースがあれば除去\n  const removedLstPlusParam = removedLstSpaceParam.replace(/\\+*$/, \"\");\n  // 分解したものと、文字列としてinputタグに入力するものをreturn\n  return {\n    inputChars: removedLstPlusParam,\n    inputData: removedLstPlusParam.split(\" \")\n  }\n}\nexport { getParameterChars };",
      },
      {
        heading: "設問の回答内容に合わせて処理分岐",
        icon: "",
        summary: "設問は事前に把握しているので、質問の回答形式にあわせて回答を反映するように処理を分岐。",
        tasks: ["選択式、記述式などの回答形式にあわせたDOM生成処理を実施", "定数の使用により読みやすい、編集しやすいコードを維持", "どの区分の、どの設問についての処理か、ひとめでわかるように記述"],
        link: "",
        image: "",
        code: "/**\n * 回答データをセット\n * @param {object} quesData - {questionnaire: Array(28)} 質問JSON\n * @param {object} ansData - {CODE: 1000, ID: 10001, KUBUN: 1, KEN: '北海道', ...} 各自治体用回答JSON\n */\nexport function setAnswer(quesData, ansData) {\n\n  // 「yuko:９」=> 設問回答エリア除去。文章を設置後処理終了。\n  const NO_ANSWER = 9;\n  const noAnswerText = \"アンケートの回答をいただけませんでした。\";\n  if (ansData.yuko === NO_ANSWER) {\n    create.changeNoAnswerDom(noAnswerText);\n    return;\n  }\n\n  const CHIJI = 1;\n  const SEIREI = 2;\n  const OTHER = 3;\n\n  // 知事\n  if (ansData.KUBUN === CHIJI) {\n    for (const ansDataQuesId in ansData) {\n      if (ansDataQuesId === \"q1\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q2\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q3\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q4\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q6\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q7\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q8\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q9\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q10\") setFreeDescription(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q11\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q12\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q13\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q14\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q15\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q16\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q17\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q18a\" && ansData[\"q18a\"] !== 49) setQ18Answer(quesData, ansData, ansDataQuesId, CHIJI);\n      if (ansDataQuesId === \"q19\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q20\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q21\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q22\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q23\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q24\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q25\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q26\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q27\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q28\") setFreeDescription(quesData, ansData, ansDataQuesId);\n    }\n  }\n\n  // 政令市長\n  if (ansData.KUBUN === SEIREI) {\n    for (const ansDataQuesId in ansData) {\n      if (ansDataQuesId === \"q1\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q2\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q3\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q5\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q6\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q8\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q9\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q10\") setFreeDescription(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q11\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q12\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q13\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q14\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q15\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q16\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q17\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q18a\" && ansData[\"q18a\"] === 49) setQ18Answer(quesData, ansData, ansDataQuesId, SEIREI);\n      if (ansDataQuesId === \"q19\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q20\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q21\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q22\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q23\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q24\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q25\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q26\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q27\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q28\") setFreeDescription(quesData, ansData, ansDataQuesId);\n    }\n  }\n\n  // その他市区町村長\n  if (ansData.KUBUN === OTHER) {\n    for (const ansDataQuesId in ansData) {\n      if (ansDataQuesId === \"q1\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q2\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q3\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q5\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q7\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q8\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q9\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q10\") setFreeDescription(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q11\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q12\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q13\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q14\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q15\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q16\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q17\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q18a\" && ansData[\"q18a\"] === 49) setQ18Answer(quesData, ansData, ansDataQuesId, OTHER);\n      if (ansDataQuesId === \"q19\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q20\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q21\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q22\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q23\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q24\") setYesNoTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q25\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q26\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q27\") setSelectTypeAnswer(quesData, ansData, ansDataQuesId);\n      if (ansDataQuesId === \"q28\") setFreeDescription(quesData, ansData, ansDataQuesId);\n    }\n  }\n}",
      },
      {
        heading: "イレギュラーな回答や自治体ごとの処理への対応",
        icon: "",
        summary: "一例だが、自治体の特殊な場合の対応もその内容ごとに関数を作成し、IDでの処理分岐により対応実施しました。",
        tasks: ["自治体の回答は全てこちらの意図したとおりではない。その反映のために個別に関数を作成"],
        link: "",
        image: "",
        code: "const createChiefNameAttention = (fileName) => {\n  // 奈良県 下市町 29443\n  const NARA_SHIMOICHI_CHO = \"29443\";\n  const NARA_SHIMOICHI_CHO_ATTENTION = \"※「すぎ」は「木」へんに「久」\";\n  // 鳥取県 日野町 31402\n  const TOTTORI_HINO_CHO = \"31402\";\n  const TOTTORI_HINO_CHO_ATTENTION = \"※「さこ」は「土」へんに「谷」\";\n  const target = document.getElementById('js-respondent');\n  if (fileName === NARA_SHIMOICHI_CHO) {\n    const p = document.createElement('p');\n    p.classList = 'chief_annotation';\n    p.textContent = NARA_SHIMOICHI_CHO_ATTENTION;\n    target.after(p);\n  }\n  if (fileName === TOTTORI_HINO_CHO) {\n    const p = document.createElement('p');\n    p.classList = 'chief_annotation';\n    p.textContent = TOTTORI_HINO_CHO_ATTENTION;\n    target.after(p);\n  }\n}\nexport { createChiefNameAttention }"
      },
      {
        heading: "EJSでの全ページ静的HTMLファイルの生成①",
        icon: "",
        summary: "htmlファイルを全ページ生成するということで、galpを使用。先方からいただいたエクセルデータを、ページごとのJSON文字列に変換してJSONファイルをまず作成。そのJSONファイルで各ページ用のhtmlファイルを作成という段階を踏むことにした。",
        tasks: ["NPMパッケージ「xlsx」によるエクセルファイルからのJSONファイル生成を実施"],
        link: "",
        image: "",
        code: "class ExcelSheetToJson {\n  constructor() {\n    this.dest = 'data/prefectures' // 出力先\n  }\n  // エクセルファイルの1シート目のデータを取得\n  // 一行ずつjsonにした配列を返している\n  getExcelData(excelFilePath) {\n    const workbook = XLSX.readFile(excelFilePath);\n    const eachMunicipalityData = workbook.Sheets[workbook.SheetNames[0]];\n    const pageData = workbook.Sheets[workbook.SheetNames[1]];\n    const obj = {\n      eachMunicipalityData: XLSX.utils.sheet_to_json(eachMunicipalityData, { defval: '' }), // 回答ページのHTMLの中で使うデータをまとめたJSON\n      pageData: XLSX.utils.sheet_to_json(pageData, { defval: '' }) // 回答ページのHTMLファイルを生成するために使うJSON\n    }\n    return obj;\n  }\n  // /nn/CODE.jsonの書き込み\n  writeEachMunicipalityJsonFile(sheetData) {\n    sheetData.forEach((rowData, idx) => {\n      const jsonStr = JSON.stringify(rowData)\n      // JSONファイルの格納ディレクトリがなければ作成\n      if (!fs.existsSync(`${this.dest}/${rowData[\"prefecture_id\"]}`)) {\n        fs.mkdirSync(`${this.dest}/${rowData[\"prefecture_id\"]}`, { recursive: true })\n      }\n      // JSONファイル作成\n      fs.writeFile(`${this.dest}/${rowData[\"prefecture_id\"]}/${rowData[\"CODE\"]}.json`, jsonStr, (err) => {\n        if (err) {\n          console.error(\n            c.red('ERR! ') +\n            `Failed to create '${this.dest}/${rowData[\"prefecture_id\"]}/${rowData[\"CODE\"]}.json'：${err}`\n          )\n          return\n        }\n        console.log(\n          `Created '` + c.green(`${this.dest}/${rowData[\"prefecture_id\"]}/${rowData[\"CODE\"]}.json`) + `'`\n        )\n      })\n    });\n  }\n  // page.jsonの書き込み\n  writePageJsonFile(sheetData) {\n    const jsonStr = JSON.stringify(sheetData)\n    fs.writeFile(`${this.dest}/page.json`, jsonStr, (err) => {\n      if (err) {\n        console.error(c.red('ERR! ') + 'Failed to create page.json')\n        return\n      }\n      console.log(`Created '` + c.green('page.json') + `'`)\n    })\n  }\n}",
      },
      {
        heading: "EJSでの全ページ静的HTMLファイルの生成②",
        icon: "",
        summary: "htmlファイルを全ページ生成するということで、galpを使用。先方からいただいたエクセルデータを、ページごとのJSON文字列に変換してJSONファイルをまず作成。そのJSONファイルで各ページ用のhtmlファイルを作成という段階を踏むことにした。",
        tasks: ["gulpfile.jsにて各都道府県ページを作成するためのタスクを定義"],
        link: "",
        image: "",
        code: "const compilePrefecturesPage = (done) => {\n  const prefecturePageListData = JSON.parse(fs.readFileSync('data/prefectures/prefectures.json', 'utf-8')); // 各県ページの情報\n  const page = JSON.parse(fs.readFileSync('data/prefectures/page.json', 'utf-8')); // 回答ページリスト\n  const questionData = JSON.parse(fs.readFileSync('data/prefectures/question.json', 'utf-8')); // 質問と選択肢データ\n  const adjustData = adjustPageData(page); // pageデータを県IDごとにまとめ、CODE順にソートしたもの。\n  // prefectures/県ID/index.html（県トップ）\n  for (let key in prefecturePageListData) {\n    gulp\n      .src(\"ejs/prefectures/_prefIdxTmp.ejs\")\n      .pipe(plumber())\n      /**\n       * prefecturePageListData[key]\n       *  \"01\":{\n       *    \"regionNum\":1,\n       *    \"region\":\"北海道・東北\",\n       *    \"prefectureName\": \"北海道\",\n       *    \"prefectureId\": \"01\"\n       *  },\n       */\n      /**\n       * adjPageData[key]\n       *  \"01\":{\n       *   \"filename\": 1000,\n       *   \"json\": \"1000.json\",\n       *   \"prefecture_id\": \"01\",\n       *   \"CODE\": 1000,\n       *   \"KEN\": \"北海道\"\n       *  },\n       */\n      .pipe(ejs({ pageData: prefecturePageListData[key], adjPageData: adjustData[key] }))\n      .pipe(htmlbeautify({\n        indent_size: 2,\n        indent_char: \" \",\n        max_preserve_newlines: 0,\n        preserve_newlines: false,\n        indent_inner_html: false,\n        extra_liners: [\"head\", \"body\", \"html\", \"section\", \"aside\", \"header\", \"footer\"],\n      }))\n      .pipe(rename({\n        basename: \"index\",\n        extname: \".html\"\n      }))\n      .pipe(gulp.dest(`../prefectures/${key}`));\n  };\n\n\n  // prefectures/県ID/CODE.html（回答）\n  page.forEach(item => {\n    const codeJsonData = JSON.parse(fs.readFileSync(`data/prefectures/${item.prefecture_id}/${item.json}`, 'utf-8'));\n    gulp\n      .src(\"ejs/prefectures/_ansPageTmp.ejs\")\n      .pipe(plumber())\n      /**\n       * data\n       * {\"prefecture_id\":\"01\",\"CODE\":1000,\"ID\":10001,\"KUBUN\":1,\"KEN\":\"北海道\",\"KAITOU\":\"鈴木 直道\",\"AGE\":3}\n       */\n      /**\n       * questionData：質問と選択肢\n       */\n      .pipe(ejs({ pageData: codeJsonData, questionData: questionData }))\n      .pipe(htmlbeautify({\n        indent_size: 2,\n        indent_char: \" \",\n        max_preserve_newlines: 0,\n        preserve_newlines: false,\n        indent_inner_html: false,\n        extra_liners: [\"head\", \"body\", \"html\", \"section\", \"aside\", \"header\", \"footer\"],\n      }))\n      .pipe(rename({\n        basename: `${item.filename}`,\n        extname: \".html\"\n      }))\n      .pipe(gulp.dest(`../prefectures/${item.prefecture_id}`));\n  });\n  done();\n}",
      }
    ],
  },
  {
    id: "6",
    slug: "worldcup-2022",
    title: "サッカーワールドカップ2022 WebAPI データ処理",
    description: "WebAPI経由でJSONデータを取得し、DOMを構築する処理を担当。掲載情報は、試合日時などの要因から自動で切り替わるように開発しました。試合ごとのページでは、試合進行に合わせてリアルタイムで表示更新が行われるように構築しました。一つのUIを構築するために複数のデータから必要情報を取得して来る必要があり、プロミス処理について深く考えさせられました。",
    image: "http://www3.nhk.or.jp/news/special/soccer_worldcup/2022/images/og_image.jpg",
    overview: {
      text: "制作中",
      tags: ["Webpack", "JavaScript", "jQuery"],
      period: "2022.08 - 2022.12",
      role: "コーディング",
      team: "6名",
      links: {
        sourceUrl: "",
        pageUrl: "https://www3.nhk.or.jp/news/special/soccer_worldcup/"
      }
    },
    highlights: undefined,
  }
]
