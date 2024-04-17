import { navigation } from "@/constants";
import { Logo } from "@/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/" prefetch={false}>
        <Image src={Logo} width={170} height={0} alt="Logo" loading="lazy" />
        <span className="sr-only">RazyF. Home page</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {navigation.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.href}
                className="inline-flex min-h-11 items-center"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
