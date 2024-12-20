import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { getAssetPath } from "../Utils/Process";
import HeadingLevel3 from "../Utils/HeadingLevel3";
import ProjectTags from "./ProjectTags";

interface ProjectsList {
  id: string;
  slug: string;
  isLink: boolean;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl?: string;
  pageUrl?: string;
}

interface CardsProps {
  data: ProjectsList[];
}

interface CardFigure {
  image: string;
  title: string;
  isLink: boolean;
}

const CardFigure = ({ image, title, isLink }: CardFigure) => {
  return (
    <figure className="w-full rounded-xl aspect-video overflow-hidden relative">
      <Image
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        src={getAssetPath(image)}
        alt={`${title} project preview`}
        fill
        priority
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {isLink && (
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="font-bold text-white">View Details</span>
        </div>
      )}
    </figure>
  );
};

export default function Cards({ data }: CardsProps) {
  return (
    <div className="my-20">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-16">
        {data.map(
          ({
            id,
            slug,
            isLink,
            title,
            description,
            tags,
            image,
            sourceUrl,
            pageUrl,
          }) => {
            return (
              <li id={`projects-${id}`} key={id}>
                {isLink ? (
                  <Link
                    href={`/projects/${slug}`}
                    className="flex flex-col gap-4 block group"
                  >
                    <CardFigure image={image} title={title} isLink={isLink} />
                    <HeadingLevel3 text={title} />
                  </Link>
                ) : (
                  <div className="flex flex-col gap-4 group">
                    <CardFigure image={image} title={title} isLink={isLink} />
                    <HeadingLevel3 text={title} />
                  </div>
                )}

                <div className="mt-4">
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
}
