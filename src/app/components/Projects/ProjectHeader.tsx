import React from "react";
import { getAssetPath } from "../Utils/Process";

interface ProjectHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectHeader({
  title,
  description,
  image,
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 pb-16">
      <figure className="w-full h-full aspect-video md:w-[52.18%] shrink-0 border border-gray-200 rounded-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={getAssetPath(image)} // ハードコードされたURLを変数に
          alt=""
        />
      </figure>
      <div className="flex flex-col gap-2 md:gap-6 md:pt-8">
        <h1
          className="font-bold"
          style={{
            fontSize: "min(5.3vw, 28px)",
          }}
        >
          {title}
        </h1>
        <p
          className="flex-1"
          style={{
            fontSize: "min(4.26vw, 20px)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
