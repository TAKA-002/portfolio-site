export type PageItem = {
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
  }
}

export const pageData: PageItem[] = [
  {
    id: "1",
    slug: "bdc-lp",
    title: "BDC ピラティス LPページコーディング",
    description: "静的ファイルでの書き出しを目指してEJSを採用いたしました。開発環境をシンプルに構築できる点も魅力でした。JS、CSSのバンドルも含めてWebpackを活用し、効率化を実現しました。",
    image: "/images/tmb/tmb_bdcpilates.avif",
    overview: {
      text: "lorem",
      tags: ["Webpack", "EJS", "SCSS"],
      period: "2024.06",
      role: "コーディング",
      team: "2名（ディレクションはもう1名が担当）",
      links: {
        sourceUrl: "",
        pageUrl: "https://bdcpilates.com/for_beginners"
      }
    }
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
    }
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
    }
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
    }
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
    }
  }
]
