import React from "react";
import { AnchorButton } from "./Utils/Button";
import Section from "./Utils/Section";

const Hero = () => {
  const fadeUpAnimation = (delay = 0) => {
    return {
      animation: `fade-up 1s ease-out ${delay}s`, // 使用するキーフレームと挙動
      opacity: 0, // アニメーション発火前の初期表示
      animationFillMode: "forwards", // アニメーション終了時の状態のままにする
    };
  };

  return (
    <Section>
      <div className="max-w-2xl">
        <h1
          className="leading-tight font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            ...fadeUpAnimation(),
          }}
        >
          Hi, I'm Takayuki Miura.
        </h1>
        <p
          className="mt-4"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
            ...fadeUpAnimation(0.2),
          }}
        >
          Frontend Developer crafting modern web experiences.
        </p>

        <div className="flex gap-4 mt-8">
          <AnchorButton
            href="#projects"
            text="View Projects"
            fadeUpAnimation={fadeUpAnimation}
            isAccent
          />
          <AnchorButton
            href="#skills"
            text="View Skills"
            fadeUpAnimation={fadeUpAnimation}
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
