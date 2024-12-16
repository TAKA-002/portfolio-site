export type PageItem = {
  id: string;
  slug: string,
  title: string;
  // 他のプロパティも追加可能
}

export const pageData: PageItem[] = [
  {
    id: "1",
    slug: "bdc-lp",
    title: "BDC ピラティス LPページコーディング | Takayuki Miura PortFolio"
  },
  {
    id: "2",
    slug: "text-manipulator",
    title: "Text Manipulator App | Takayuki Miura PortFolio"
  },
  {
    id: "3",
    slug: "image-creator",
    title: "image-creator Web App | Takayuki Miura PortFolio"
  },
  {
    id: "4",
    slug: "senkyo-web",
    title: "選挙WEB 各種ページ制作・運用 | Takayuki Miura PortFolio"
  },
  {
    id: "5",
    slug: "worldcup-2022",
    title: "サッカーワールドカップ2022 WebAPI データ処理 | Takayuki Miura PortFolio"
  }
]
