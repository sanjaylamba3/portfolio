import React from "react";
import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Link from "next/link";
import BorderMagicButton from "../ui/border-magic-button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      {/* spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
          fill="white"
        ></Spotlight>
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        ></Spotlight>
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        ></Spotlight>
      </div>
      {/* background */}
      <div className="dark:bg-black-100 dark:bg-grid/[0.5] bg-secondary absolute top-0 left-0 flex h-screen w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="dark:bg-black-100 bg-secondary pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {/* text */}
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="text-center text-xs tracking-widest text-blue-100 uppercase">
            Crafting Beautiful, Functional Web Experiences
          </h2>
          <TextGenerateEffect
            className="text-center"
            words="Hello I am Sanjay Lamba"
            textClassName="text-4xl md:text-5xl lg:text-6xl "
          />

          <p className="mb-4 text-center text-sm capitalize md:text-lg md:tracking-wider lg:text-2xl">
            full stack web developer based in india
          </p>

          <Link href="#about">
            <BorderMagicButton
              title="Show my work"
              iconPosition="right"
              icon={<FaLocationArrow></FaLocationArrow>}
            ></BorderMagicButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
