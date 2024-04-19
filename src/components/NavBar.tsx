"use client";

import { navigation } from "@/constants";
import { Logo } from "@/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnLink from "./BtnLink";

const NavBar = () => {
  return (
    <nav className="p-4 md:p-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/" prefetch={false}>
          <Image src={Logo} width={170} height={0} alt="Logo" loading="lazy" />
          <span className="sr-only">RazyF. Home page</span>
        </Link>
        <ul className="flex gap-6">
          {navigation.map((navItem) => {
            if (navItem.isButton) {
              return (
                <li key={navItem.id}>
                  <BtnLink label={navItem.label} link={navItem.href} />
                </li>
              );
            }
            return (
              <li key={navItem.id}>
                <Link
                  href={navItem.href}
                  className="inline-flex min-h-11 items-center"
                >
                  {navItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
