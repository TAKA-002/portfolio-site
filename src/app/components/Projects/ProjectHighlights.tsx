import React from "react";
import HeadingLevel2 from "../Utils/HeadingLevel2";
import HeadingLevel3 from "../Utils/HeadingLevel3";

interface ProjectHighlighsProps {
  heading: string;
  icon: string;
  summary: string;
  tasks: string[];
  figure: string;
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
        {highlights.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <HeadingLevel3 text={item.heading} />

              <div className="mt-8 w-full flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-full md:flex-1 md:min-w-0">
                  <p className="text-base leading-relaxed">{item.summary}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {item.tasks.map((item, index) => {
                      return (
                        <li
                          className="relative pl-4 before:absolute before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-blue-500 before:top-[10px] before:left-0 break-words"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* 画像があれば、画像を表示する */}
                {item.image !== "" ? (
                  // 画像
                  <figure className="w-full md:w-[52.18%] aspect-video rounded-lg">
                    <img
                      className="w-full h-auto object-contain rounded-lg"
                      src={item.image}
                      alt=""
                    />
                  </figure>
                ) : (
                  // コード
                  <div className="pr-2 md:w-[52.18%] md:basis-[52.18%] max-h-96 overflow-y-scroll rounded-lg">
                    <pre className="bg-gray-900 rounded-xl p-6">
                      <code className="text-sm text-gray-200 whitespace-pre-wrap break-all">
                        {item.code}
                      </code>
                    </pre>
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
