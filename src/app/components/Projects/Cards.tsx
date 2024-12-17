import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { ProjectsList } from "@/app/types/projectsList";
import { getAssetPath } from "../Utils/Process";
import HeadingLevel3 from "../Utils/HeadingLevel3";
import ProjectTags from "./ProjectTags";

type CardsProps = {
  data: ProjectsList[];
};

const Cards = ({ data }: CardsProps) => {
  return (
    <div className="my-20">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-16">
        {data.map(
          ({ id, title, description, tags, image, sourceUrl, pageUrl }) => {
            return (
              <li
                id={`projects-${id}`}
                className="flex flex-col gap-4"
                key={id}
              >
                <figure className="w-full rounded-xl aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={getAssetPath(image)} // ハードコードされたURLを変数に
                    alt={`${title} project preview`} // 空のalt属性を意味のあるものに
                  />
                </figure>

                <div>
                  <HeadingLevel3 text={title} />
                  <p className="mb-4 leading-normal text-base md:text-lg">
                    {description}
                  </p>
                  <ProjectTags tags={tags} id={id} />

                  <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                    {sourceUrl && (
                      <a
                        className="text-sm md:text-base flex flex-row gap-2 origin-bottom-left hover:text-gray-600 hover:-rotate-6 hover:scale-105 transition-all"
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${title}`}
                      >
                        <Github />
                        Source
                      </a>
                    )}
                    {pageUrl && (
                      <a
                        className="text-sm md:text-base flex flex-row gap-2 origin-bottom-left hover:text-gray-600 hover:-rotate-6 hover:scale-105 transition-all"
                        href={pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
