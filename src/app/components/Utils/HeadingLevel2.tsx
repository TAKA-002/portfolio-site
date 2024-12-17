import React from "react";

type HeadingLevel2Props = {
  text: string;
  useProject: boolean;
};
const HeadingLevel2 = ({ text, useProject }: HeadingLevel2Props) => {
  if (useProject) {
    return <h2 className="font-bold text-2xl">{text}</h2>;
  }

  return <h2 className="font-bold text-3xl">{text}</h2>;
};

export default HeadingLevel2;
