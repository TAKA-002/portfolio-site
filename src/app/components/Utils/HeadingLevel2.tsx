import React from "react";

interface HeadingLevel2Props {
  text: string;
  useProject?: boolean;
}

export default function HeadingLevel2({
  text,
  useProject = undefined,
}: HeadingLevel2Props) {
  if (useProject) {
    return <h2 className="font-bold text-2xl">{text}</h2>;
  }

  return <h2 className="font-bold text-3xl">{text}</h2>;
}
