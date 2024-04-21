import React from "react";
import Bounded from "./Bounded";
import BtnLink from "./BtnLink";
import Image from "next/image";
import { ShowcaseImg } from "@/images";
import clsx from "clsx";
import { PiPaintBrush } from "react-icons/pi";

const Showcase = () => {
  return (
    <Bounded className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <div>
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          Your goal <br />
          Our passion.
        </h2>
      </div>
      <div className="mt-16 grid items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            <PiPaintBrush />
          </div>
          <div className="mt-6 text-2xl font-normal">
            <h3>Feel the creativity</h3>
          </div>
          <div className="prose prose-invert mt-4 max-w-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
              sed laboriosam magni neque! Veritatis eos laudantium beatae quod,
              impedit, fugiat nisi reprehenderit quae accusamus dolorem error
              facilis, praesentium ipsa.
            </p>
          </div>
          <BtnLink className="mt-6" label="Get Started" link="#" />
        </div>
        <Image
          src={ShowcaseImg}
          alt="showcase"
          width={0}
          height={0}
          className={clsx(
            "rounded-lg border border-blue-50/20 opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            "lg:-order-1 lg:translate-x-[-15%]",
          )}
        />
      </div>
    </Bounded>
  );
};

export default Showcase;
