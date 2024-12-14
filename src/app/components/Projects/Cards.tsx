import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/types/projects";

const TAG_COLORS = {
  React: "bg-cyan-400 text-black",
  Tailwind: "bg-sky-500 text-white",
  "Next.js": "bg-black text-white",
  TypeScript: "bg-blue-600 text-white",
  JavaScript: "bg-yellow-400 text-black",
  Node: "bg-green-600 text-white",
  default: "bg-gray-600 text-white",
} as const;

const getTagColor = (tag: string) => {
  return TAG_COLORS[tag] || TAG_COLORS.default;
};

const Cards = ({ data }) => {
  return (
    <div className="my-20">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-16">
        {data.map(
          ({
            id,
            title,
            description,
            tags,
            image,
            sourceUrl,
            pageUrl,
          }: Project) => {
            return (
              <li
                id={`projects-${id}`}
                className="flex flex-col gap-4"
                key={id}
              >
                <figure className="w-full rounded-xl aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={image} // ハードコードされたURLを変数に
                    alt={`${title} project preview`} // 空のalt属性を意味のあるものに
                  />
                </figure>

                <div>
                  <h3 className="mb-4 text-xl font-semibold">{title}</h3>
                  <p className="mb-4 leading-normal text-base md:text-lg">
                    {description}
                  </p>

                  <div className="mb-4 flex flex-row flex-wrap gap-2">
                    {tags.map((item, index) => {
                      return (
                        <span
                          key={`${id}-${item}-${index}`}
                          className={`px-4 py-1 text-sm rounded-2xl ${getTagColor(
                            item
                          )}`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                    {sourceUrl && (
                      <a
                        className="text-sm md:text-base flex flex-row gap-2 origin-bottom-left hover:text-gray-600 hover:-rotate-6 transition-all"
                        href={sourceUrl}
                        aria-label={`View source code for ${title}`}
                      >
                        <Github />
                        Source
                      </a>
                    )}
                    {pageUrl && (
                      <a
                        className="text-sm md:text-base flex flex-row gap-2 origin-bottom-left hover:text-gray-600 hover:-rotate-6 transition-all"
                        href={pageUrl}
                        aria-label={`Go to page for ${title}`}
                      >
                        <ExternalLink />
                        Go to Page
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Cards;
