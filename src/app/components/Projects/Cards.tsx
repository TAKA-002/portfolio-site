import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Cards = ({ data }) => {
  return (
    <div className="my-20">
      <ul className="grid grid-cols-projects gap-x-12 gap-y-16">
        {data.map(
          ({ id, title, description, tags, image, sourceUrl, pageUrl }, i) => {
            return (
              <li id={`projects-${id}`} className="flex flex-col gap-4" key={i}>
                <figure className="w-full rounded-xl aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform dulation-500"
                    src="https://picsum.photos/seed/picsum/500/300"
                    alt=""
                  />
                </figure>

                <div>
                  <h3 className="mb-4 text-xl font-semibold">{title}</h3>
                  <p
                    className="mb-4 leading-normal"
                    style={{
                      fontSize: "min(3.7vw, 16px)",
                    }}
                  >
                    {description}
                  </p>

                  <div className="mb-4 flex flex-row flex-wrap gap-2">
                    {tags.map((item) => {
                      return (
                        <span className="px-4 rounded-xl bg-green-600">
                          {item}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-row gap-4">
                    {sourceUrl && (
                      <a
                        className="flex flex-row gap-2"
                        href={sourceUrl}
                        aria-label="View source code for Project One"
                      >
                        <Github />
                        Source
                      </a>
                    )}
                    {pageUrl && (
                      <a
                        className="flex flex-row gap-2"
                        href={pageUrl}
                        aria-label="Go to page for Project One"
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
