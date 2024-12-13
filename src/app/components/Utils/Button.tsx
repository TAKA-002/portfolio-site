import React from "react";

type AnchorButtonProps = {
  href: string;
  text: string;
  fadeUpAnimation: (delay: number) => object;
  isAccent?: boolean;
};

export const AnchorButton = ({
  href,
  text,
  fadeUpAnimation,
  isAccent = false,
}: AnchorButtonProps) => {
  return (
    <a
      href={href}
      role="button"
      className={
        isAccent
          ? "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-sm rounded-lg transition-all duration-300"
          : "px-6 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm rounded-lg transition-all duration-300"
      }
      style={fadeUpAnimation(0.4)}
    >
      {text}
    </a>
  );
};
