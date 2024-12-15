// 静的サイト生成（SSG）+ ダイナミックルーティングの場合、明示しないといけない。
export const dynamic = "force-static";

// 事前にIDのリストをわたしておく。そのとき、promiseを返す関数generateStaticParamsで準備する。
export async function generateStaticParams() {
  // 例: プロジェクトIDのリストを返す
  const ids = ["1", "2", "3", "4", "5"];

  return ids.map((id) => ({
    id: id,
  }));
}

type ProjectParams = {
  params: { id: string };
};

export default async function ProjectPage({ params }: ProjectParams) {
  // paramsはpromiseで扱われるため、そのpromiseを解決する必要がある。
  const { id } = await Promise.resolve(params);

  return (
    <div>
      <h1 className="h-[1000px] bg-black">Project {id}</h1>
    </div>
  );
}
