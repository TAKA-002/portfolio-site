import React from "react";
import Section from "./Utils/Section";
import Cards from "./Projects/Cards";

const Projects = () => {
  return (
    <Section anchor="projects">
      <h2 className="font-bold text-3xl">Projects</h2>
      <Cards />
    </Section>
  );
};

export default Projects;
