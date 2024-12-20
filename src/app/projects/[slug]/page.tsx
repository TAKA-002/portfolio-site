import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectArticles } from "../../components/Projects/articles";
import ProjectBase from "../../components/Projects/ProjectBase";

// 静的サイト生成（SSG）+ ダイナミックルーティングの場合、明示しないといけない。
export const dynamic = "force-static";

// 事前にIDのリストをわたしておく。そのとき、promiseを返す関数generateStaticParamsで準備する。
export async function generateStaticParams() {
  // 例: プロジェクトIDのリストを返す
  return projectArticles.map((item) => ({
    slug: item.slug,
  }));
}

interface ProjectParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const projectData = projectArticles.find((item) => item.slug === slug);

  // projectArticlesにslugの文字列が存在しない場合404ページ用titleを設定
  if (!projectData) {
    return {
      title: "Not Found | Takayuki Miura PortFolio",
    };
  }

  return {
    title: `${projectData?.title} | Takayuki Miura PortFolio`,
    description: projectData.description,
    openGraph: {
      title: `${projectData?.title} | Takayuki Miura PortFolio`,
      description: projectData.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectParams) {
  // paramsはpromiseで扱われるため、そのpromiseを解決する必要がある。
  // 型定義の段階で、promiseとして定義しているので、Promise.resolveでPromise変換が不要。
  const { slug } = await params;

  // projectArticlesから、paramsのslugと同じデータをまとめているオブジェクトを取得
  const pageItem = projectArticles.find((item) => item.slug === slug);
  if (!pageItem) {
    notFound();
  }

  return (
    <>
      <ProjectBase pageItem={pageItem} />
    </>
  );
}
