// ブラウザ側で動的に実行されるコンポーネントであることを明示する
"use client";

import React, { useState, useEffect } from "react";
import { getAssetPath } from "./Utils/Process";
import Section from "./Utils/Section";
import HeadingLevel2 from "./Utils/HeadingLevel2";
import Cards from "./Projects/Cards";

const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchProjectsData();

    async function fetchProjectsData() {
      try {
        const res = await fetch(getAssetPath("/data/projectsList.json"));
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const { projects } = await res.json();
        setProjectsData(projects);
      } catch (err) {
        // throwでなげられるものは、Errorオブジェクトとは限らない。
        // だから、catchで受け取るerrは、どんな型がくるかわからない（unknown）
        // 安全に処理するために、型チェックが必要
        if (err instanceof Error) {
          setError(err.message);
          console.error("Error fetch:", err);
        } else {
          setError("unknown error");
          console.error("Error fetch:", err);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <Section anchor="projects">
      <HeadingLevel2 text="Projects" />

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

export default ProjectsList;
