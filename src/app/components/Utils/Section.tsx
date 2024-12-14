import React from "react";

type SectionProps = {
  children: React.ReactNode;
  anchor?: string;
};

const Section = ({ children, anchor = "" }: SectionProps) => {
  return (
    <section id={anchor} className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      {children}
    </section>
  );
};

export default Section;
