"use client";

import React, { useState, useEffect } from "react";
import Section from "./Utils/Section";
import Cards from "./Projects/Cards";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    async function fetchProjectsData() {
      const res = await fetch("/data/projects.json");
      if (res.ok) {
        const { projects } = await res.json();
        setProjectsData(projects);
      } else throw new Error();
    }

    fetchProjectsData();
  }, []);

  return (
    <Section anchor="projects">
      <h2 className="font-bold text-3xl">Projects</h2>
      <Cards data={projectsData} />
    </Section>
  );
};

export default Projects;
