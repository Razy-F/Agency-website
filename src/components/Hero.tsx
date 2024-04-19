import { CoverImage } from "@/images";
import Image from "next/image";
import React from "react";
import Bounded from "./Bounded";
import StarGrid from "./StarGrid";
import BtnLink from "./BtnLink";

const Hero = () => {
  return (
    <Bounded className="text-center">
      <div className="relative">
        <StarGrid />
        <h1 className="text-balance text-center text-5xl font-medium md:text-7xl">
          Designs that shine with dynamic intelligence.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-balance text-slate-300">
          The AI features you need to transport your business from the little
          leagues to the big time.
        </p>
        <BtnLink label="Download Now" link="#" className="mt-8" />
        <div className="glass-container mt-16 w-fit">
          <div className="absolute inset-0 -z-10 bg-[#b6a041] blur-2xl filter" />
          <Image
            src={CoverImage}
            alt="cover image"
            height={0}
            width={0}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
