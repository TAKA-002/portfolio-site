import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Cards = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="my-20">
      <ul className="grid grid-cols-projects gap-x-12 gap-y-16">
        {data.map((i) => {
          return (
            <li className="flex flex-col gap-4" key={i}>
              <figure className="w-full rounded-xl aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform dulation-500"
                  src="https://picsum.photos/seed/picsum/500/300"
                  alt=""
                />
              </figure>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Project One</h3>
                <p
                  className="mb-4 leading-normal"
                  style={{
                    fontSize: "min(3.7vw, 16px)",
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, labore! Magni aperiam ab iure officiis!
                </p>

                <div className="mb-4 flex flex-row flex-wrap gap-2">
                  <span className="px-4 rounded-xl bg-green-600">React</span>
                  <span className="px-4 rounded-xl bg-green-600">Next.js</span>
                  <span className="px-4 rounded-xl bg-green-600">Tailwind</span>
                  <span className="px-4 rounded-xl bg-green-600">React</span>
                  <span className="px-4 rounded-xl bg-green-600">Next.js</span>
                  <span className="px-4 rounded-xl bg-green-600">Tailwind</span>
                  <span className="px-4 rounded-xl bg-green-600">React</span>
                  <span className="px-4 rounded-xl bg-green-600">Next.js</span>
                  <span className="px-4 rounded-xl bg-green-600">Tailwind</span>
                  <span className="px-4 rounded-xl bg-green-600">React</span>
                  <span className="px-4 rounded-xl bg-green-600">Next.js</span>
                  <span className="px-4 rounded-xl bg-green-600">Tailwind</span>
                </div>

                <div className="flex flex-row gap-4">
                  <a
                    className="flex flex-row gap-2"
                    href=""
                    aria-label="View source code for Project One"
                  >
                    <Github />
                    Source
                  </a>
                  <a
                    className="flex flex-row gap-2"
                    href=""
                    aria-label="Go to page for Project One"
                  >
                    <ExternalLink />
                    Go to Page
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
