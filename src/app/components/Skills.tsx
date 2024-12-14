import React from "react";
import Section from "./Utils/Section";
import Heading from "./Utils/Heading";
import HeadingLevel3 from "./Utils/HeadingLevel3";
import { skillsData } from "./Skills/variables";

const Skills = () => {
  return (
    <Section anchor="skills">
      <Heading text="Skills" />

      <div className="my-20 grid grid-cols-2 gap-16">
        {skillsData.map((item, index) => {
          return (
            <div key={index}>
              <HeadingLevel3 text={item.name} />

              <div className="flex flex-col gap-4">
                {item.data.map((d, idx) => {
                  return (
                    <div className="flex item-center justify-between" key={idx}>
                      <Paragraph text={d.name} />

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => {
                          return (
                            <span
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index < d.score ? "bg-blue-500" : "bg-gray-200"
                              }`}
                            ></span>
                          );
                        })}
                      </div>
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
  return <p className="text-gray-800">{text}</p>;
};

export default Skills;
