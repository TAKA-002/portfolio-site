import React from "react";

interface HeadingLevel3Props {
  useProjectHighlights?: boolean;
  children: React.ReactNode;
}

export default function HeadingLevel3({
  useProjectHighlights = undefined,
  children,
}: HeadingLevel3Props) {
  if (useProjectHighlights) {
    return <h3 className="text-xl font-semibold">{children}</h3>;
  }
  return <h3 className="text-xl font-semibold mb-4">{children}</h3>;
}
