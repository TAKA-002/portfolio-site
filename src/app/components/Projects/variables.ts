interface TAG_COLORS {
  [key: string]: string;
}

export const TAG_COLORS: TAG_COLORS = {
  HTML: "bg-[#EB6733] text-white",
  CSS: "bg-[#2877BD] text-white",
  SCSS: "bg-[#C86596] text-white",
  React: "bg-cyan-400 text-black",
  Tailwind: "bg-sky-500 text-white",
  Next: "bg-black text-white",
  TypeScript: "bg-blue-600 text-white",
  JavaScript: "bg-yellow-400 text-black",
  jQuery: "bg-[#2269AD] text-white",
  Node: "bg-green-600 text-white",
  EJS: "bg-[#C5DC73] text-black",
  Webpack: "bg-[#7DCFF3] text-black",
  Electron: "bg-[#9FEAF9] text-black",
  PHP: "bg-[#7477AE] text-black",
  default: "bg-gray-600 text-white",
} as const;
