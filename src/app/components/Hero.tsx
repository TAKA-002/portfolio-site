import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <div className="max-w-2xl">
        <h1 className="text-5xl leading-tight font-bold">
          Hi, I'm Takayuki Miura.
        </h1>
        <p className="mt-4 text-xl/loose">
          Frontend Developer crafting modern web experiences.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-sm rounded-lg transition-all duration-300">
            View Project
          </button>
          <button className="px-6 py-3 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm rounded-lg transition-all duration-300">
            View Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
