import React from "react";
import { Spotlight } from "../ui/spotlight";

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
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
    </div>
  );
};

export default Hero;
