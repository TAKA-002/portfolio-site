import { pageData } from "../variables";

// 静的サイト生成（SSG）+ ダイナミックルーティングの場合、明示しないといけない。
export const dynamic = "force-static";

// 事前にIDのリストをわたしておく。そのとき、promiseを返す関数generateStaticParamsで準備する。
export async function generateStaticParams() {
  // 例: プロジェクトIDのリストを返す
  return pageData.map((item) => ({
    slug: item.slug,
  }));
}

type ProjectParams = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectParams) {
  // paramsはpromiseで扱われるため、そのpromiseを解決する必要がある。
  // 型定義の段階で、promiseとして定義しているので、Promise.resolveでPromise変換が不要。
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // pageDataから、paramsのidと同じデータをまとめているオブジェクトを取得
  const pageItem = pageData.find((item) => item.slug === slug);
  if (!pageItem) return;

  // オブジェクトから情報を取得
  const { title } = pageItem;

  return (
    <div>
      <h1 className="h-[1000px] bg-black">Project {slug}</h1>
      <h2>{title}</h2>
    </div>
  );
}
