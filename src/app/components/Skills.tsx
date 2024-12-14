import React from "react";
import Section from "./Utils/Section";
import Heading from "./Utils/Heading";
import HeadingLevel3 from "./Utils/HeadingLevel3";
import { skillsData } from "./Skills/variables";
import Score from "./Skills/Score";

const Skills = () => {
  return (
    <Section anchor="skills">
      <Heading text="Skills" />

      <div className="my-20 grid grid-cols-2 gap-16 md:gap-24">
        {skillsData.map((item, index) => {
          return (
            <div key={index}>
              <HeadingLevel3 text={item.name} />

              <div className="flex flex-col gap-4">
                {item.data.map((d, idx) => {
                  return (
                    <div
                      className="flex item-center justify-between gap-2"
                      key={idx}
                    >
                      <Paragraph text={d.name} />
                      <Score score={d.score} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export const Paragraph = ({ text }) => {
  return (
    <p className="text-gray-800" style={{ fontSize: "min(3.7vw, 16px)" }}>
      {text}
    </p>
  );
};

export default Skills;
