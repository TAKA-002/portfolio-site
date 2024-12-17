import React from "react";
import { TAG_COLORS } from "./variables";

const getTagColor = (tag: string) => {
  return TAG_COLORS[tag] || TAG_COLORS.default;
};

const ProjectTags = ({ tags, id }) => {
  return (
    <div className="mb-4 flex flex-row flex-wrap gap-2">
      {tags.map((item, index) => {
        return (
          <span
            key={`${id}-${item}-${index}`}
            className={`px-4 py-1 text-sm rounded-2xl ${getTagColor(item)}`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default ProjectTags;
