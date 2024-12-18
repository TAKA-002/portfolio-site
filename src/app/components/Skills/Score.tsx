import React from "react";

export default function Score({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        return (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < score ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></span>
        );
      })}
    </div>
  );
}
