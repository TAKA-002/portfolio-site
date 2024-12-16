import { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageData } from "../variables";

// 静的サイト生成（SSG）+ ダイナミックルーティングの場合、明示しないといけない。
export const dynamic = "force-static";

type ProjectParams = {
  params: Promise<{ slug: string }>;
};

// 事前にIDのリストをわたしておく。そのとき、promiseを返す関数generateStaticParamsで準備する。
export async function generateStaticParams() {
  // 例: プロジェクトIDのリストを返す
  return pageData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const projectData = pageData.find((item) => item.slug === slug);

  // pageDataにslugの文字列が存在しない場合404ページ用titleを設定
  if (!projectData) {
    return {
      title: "Not Found | Takayuki Miura PortFolio",
    };
  }

  return {
    title: `${projectData?.title} | Takayuki Miura PortFolio`,
    openGraph: {
      title: `${projectData?.title} | Takayuki Miura PortFolio`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectParams) {
  // paramsはpromiseで扱われるため、そのpromiseを解決する必要がある。
  // 型定義の段階で、promiseとして定義しているので、Promise.resolveでPromise変換が不要。
  const { slug } = await params;

  // pageDataから、paramsのidと同じデータをまとめているオブジェクトを取得
  const pageItem = pageData.find((item) => item.slug === slug);
  if (!pageItem) {
    notFound();
  }

  // オブジェクトから情報を取得
  const { title } = pageItem;

  return (
    <div>
      <h1 className="h-[1000px] bg-black">Project {slug}</h1>
      <h2>{title}</h2>
    </div>
  );
}
