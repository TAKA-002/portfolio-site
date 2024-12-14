"use client";

import React, { useState, useEffect } from "react";
import Section from "./Utils/Section";
import Cards from "./Projects/Cards";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchProjectsData();

    async function fetchProjectsData() {
      try {
        const res = await fetch("/data/projects.json");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const { projects } = await res.json();
        setProjectsData(projects);
      } catch (err) {
        setError(err.message);
        console.error("Error fetch:", err);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <Section anchor="projects">
      <h2 className="font-bold text-3xl">Projects</h2>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>Error projects section...</p>
      ) : (
        <Cards data={projectsData} />
      )}
    </Section>
  );
};

export default Projects;
