import React from "react";
import Bounded from "./Bounded";
import { bento } from "@/constants";
import Image from "next/image";
import clsx from "clsx";

const Bento = () => {
  return (
    <Bounded>
      <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
        The new
        <br />
        <em className=" bg-gradient-to-b from-[#b6a041] to-[#41454a] bg-clip-text not-italic text-transparent">
          Gold Standard.
        </em>
      </h2>
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <p>
          Introducing a new way of building components and layouts that leaves
          everything else in the dust.
        </p>
      </div>
      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {bento.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={item.title + item.id}
          >
            <h3 className="text-2xl">{item.title}</h3>
            <div className="max-w-md text-balance text-slate-300">
              <p>{item.description}</p>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              className="max-h-36 w-full object-cover object-top"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
