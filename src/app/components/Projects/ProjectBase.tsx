import React from "react";
import Section from "../Utils/Section";

const ProjectBase = ({ pageItem }) => {
  const { title, description, image } = pageItem;
  console.log("pageItem: ", pageItem);

  return (
    <Section>
      <div className="flex flex-row">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </Section>
  );
};

export default ProjectBase;
