import React from "react";

interface HeadingLevel3Props {
  text: string;
  useProjectHighlights?: boolean;
}

export default function HeadingLevel3({
  text,
  useProjectHighlights = undefined,
}: HeadingLevel3Props) {
  if (useProjectHighlights) {
    return <h3 className="text-xl font-semibold">{text}</h3>;
  }
  return <h3 className="text-xl font-semibold mb-4">{text}</h3>;
}
