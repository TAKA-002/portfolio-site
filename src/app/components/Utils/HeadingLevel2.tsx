import React from "react";

type HeadingLevel2Props = {
  text: string;
};
const HeadingLevel2 = ({ text }: HeadingLevel2Props) => {
  return <h2 className="font-bold text-3xl">{text}</h2>;
};

export default HeadingLevel2;
