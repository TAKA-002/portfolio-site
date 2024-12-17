import React from "react";
import Section from "../Utils/Section";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";

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
}

interface ProjectBaseProps {
  pageItem: PageItem;
}

const ProjectBase = ({ pageItem }: ProjectBaseProps) => {
  const { id, title, description, image, overview } = pageItem;

  return (
    <Section>
      <ProjectHeader title={title} description={description} image={image} />
      <main>
        <ProjectOverview overview={overview} id={id} />
      </main>
    </Section>
  );
};

export default ProjectBase;
