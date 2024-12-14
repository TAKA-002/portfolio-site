import React from "react";

type HeadingLevel3Props = {
  text: string;
};
const HeadingLevel3 = ({ text }: HeadingLevel3Props) => {
  return <h3 className="mb-4 text-xl font-semibold">{text}</h3>;
};

export default HeadingLevel3;
