import React from "react";
import { Github, ExternalLink } from "lucide-react";
import HeadingLevel2 from "../Utils/HeadingLevel2";
import ProjectTags from "./ProjectTags";

interface InformationTitleProps {
  text: string;
}

const InformationTitle = ({ text }: InformationTitleProps) => {
  return <span className="text-sm text-gray-400 font-semibold">{text}</span>;
};

interface ProjectOverviewProps {
  overview: {
    text: string;
    tags: string[];
    period: string;
    role: string;
    team: string;
    links: {
      sourceUrl: string;
      pageUrl: string;
    };
  };
  id: string;
}

export default function ProjectOverview({
  overview,
  id,
}: ProjectOverviewProps) {
  const { text, tags, period, role, team, links } = overview;

  return (
    <div className="flex flex-col md:flex-row gap-6 py-16 border-t border-gray-200">
      <div className="flex flex-col flex-1 gap-2 md:gap-6">
        <HeadingLevel2 text="概要 - Overview" useProject />
        <p>{text}</p>
        <ProjectTags tags={tags} id={id} />
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-6 w-full md:w-[52.18%] shrink-0">
        <div className="flex flex-col gap-1">
          <InformationTitle text="期間" />
          <span>{period ? period : ""}</span>
        </div>

        <div className="flex flex-col gap-1">
          <InformationTitle text="役割" />
          <span>{role ? role : ""}</span>
        </div>

        <div className="flex flex-col gap-1">
          <InformationTitle text="チーム規模" />
          <span>{team ? team : ""}</span>
        </div>

        <div className="flex flex-col gap-1">
          <InformationTitle text="リンク" />
          <div className="flex flex-col gap-2">
            {links.sourceUrl && (
              <a
                className="flex flex-row items-center gap-1"
                href={links.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
              >
                <Github />
                Source
              </a>
            )}

            {links.pageUrl && (
              <a
                className="flex flex-row items-center gap-1"
                href={links.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to page"
              >
                <ExternalLink />
                Go to Page
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
