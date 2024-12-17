import React from "react";
import Section from "../Utils/Section";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";

const ProjectBase = ({ pageItem }) => {
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
