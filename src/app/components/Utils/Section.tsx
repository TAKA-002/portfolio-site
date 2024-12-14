import React from "react";

const Section = ({ children, anchor }) => {
  return (
    <section
      id={anchor ? anchor : ""}
      className="pt-32 pb-24 max-w-6xl mx-auto px-6"
    >
      {children}
    </section>
  );
};

export default Section;
