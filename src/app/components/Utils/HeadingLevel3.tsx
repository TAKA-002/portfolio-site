import React from "react";

interface HeadingLevel3Props {
  text: string;
}

export default function HeadingLevel3({ text }: HeadingLevel3Props) {
  return <h3 className="text-xl font-semibold">{text}</h3>;
}
