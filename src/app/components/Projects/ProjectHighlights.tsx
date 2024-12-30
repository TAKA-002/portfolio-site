import React from "react";
import HeadingLevel2 from "../Utils/HeadingLevel2";
import HeadingLevel3 from "../Utils/HeadingLevel3";
import { ExternalLink } from "lucide-react";

interface ProjectHighlighsProps {
  heading: string;
  icon: string;
  summary: string;
  tasks: string[];
  link: string;
  image: string;
  code: string;
}

interface ProjectHighlights {
  highlights: ProjectHighlighsProps[];
}

export default function ProjectHighlights({ highlights }: ProjectHighlights) {
  return (
    <div className="py-16 border-t border-gray-200">
      <div>
        <HeadingLevel2 text="ハイライト - Highlights" useProject />
        <p className="mt-2 md:mt-6">
          プロジェクトのタスクにて工夫した点、実装時に気をつけた点などについて説明します。
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-y-16">
        {highlights.map((highlight, index) => {
          return (
            <div className="w-full" key={index}>
              <HeadingLevel3 text={highlight.heading} />

              <div className="mt-8 w-full flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:flex-1 md:min-w-0">
                  <p className="text-base leading-relaxed">
                    {highlight.summary}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {highlight.tasks.map((task, index) => {
                      return (
                        <li
                          className="relative pl-4 before:absolute before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-blue-500 before:top-[10px] before:left-0 break-words"
                          key={index}
                        >
                          {task}
                        </li>
                      );
                    })}
                  </ul>

                  {highlight.link && (
                    <a
                      className="mt-4 flex flex-row items-center gap-1 group"
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Go to page"
                    >
                      <ExternalLink className="transition-transform duration-300 group-hover:rotate-12" />
                      <span className="transition-all duration-300 group-hover:translate-x-1">
                        Go to Page
                      </span>
                    </a>
                  )}
                </div>

                {/* 画像あり。codeなし。 */}
                {highlight.image !== "" && highlight.code === "" && (
                  <figure className="w-full md:w-[52.18%] aspect-video rounded-lg">
                    <img
                      className="w-full h-auto object-contain rounded-lg"
                      src={highlight.image}
                      alt=""
                    />
                  </figure>
                )}

                {/* 画像なし。コードあり。 */}
                {highlight.image === "" && highlight.code !== "" && (
                  <div className="pr-2 md:w-[52.18%] md:basis-[52.18%] max-h-96 overflow-y-scroll rounded-lg">
                    <pre className="bg-gray-900 rounded-xl p-6">
                      <code className="text-sm text-gray-200 whitespace-pre-wrap break-all">
                        {highlight.code}
                      </code>
                    </pre>
                  </div>
                )}

                {/* 画像あり。コードあり。 */}
                {highlight.image !== "" && highlight.code !== "" && (
                  <div className="pr-2 md:w-[52.18%] md:basis-[52.18%]">
                    <figure className="w-full aspect-video rounded-lg">
                      <img
                        className="w-full h-auto object-contain rounded-lg"
                        src={highlight.image}
                        alt=""
                      />
                    </figure>
                    <div className="mt-4 max-h-96 overflow-y-scroll rounded-lg">
                      <pre className="bg-gray-900 rounded-xl p-6">
                        <code className="text-sm text-gray-200 whitespace-pre-wrap break-all">
                          {highlight.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
