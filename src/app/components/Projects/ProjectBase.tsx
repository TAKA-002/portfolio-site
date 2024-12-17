import React from "react";
import Section from "../Utils/Section";
import ProjectHeader from "./ProjectHeader";

const ProjectBase = ({ pageItem }) => {
  const { title, description, image } = pageItem;

  return (
    <Section>
      <ProjectHeader title={title} description={description} image={image} />
    </Section>
  );
};

export default ProjectBase;
