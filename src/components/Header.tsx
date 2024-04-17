import { Logo } from "@/images";
import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <div>
      <Image src={Logo} width={170} height={0} alt="Logo" loading="lazy" />
    </div>
  );
};

export default Header;
