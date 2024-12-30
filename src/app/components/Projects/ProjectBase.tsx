import React from "react";
import Section from "../Utils/Section";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";
import ProjectHighlights from "./ProjectHighlights";

interface PageItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
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
  highlights?: ProjectHighlighs[];
}

interface ProjectHighlighs {
  heading: string;
  icon: string;
  summary: string;
  tasks: string[];
  link: string;
  image: string;
  code: string;
}

export default function ProjectBase({ pageItem }: { pageItem: PageItem }) {
  const { id, title, description, image, overview, highlights } = pageItem;

  return (
    <Section>
      <ProjectHeader title={title} description={description} image={image} />
      <main>
        <ProjectOverview overview={overview} id={id} />

        {highlights && <ProjectHighlights highlights={highlights} />}
      </main>
    </Section>
  );
}
