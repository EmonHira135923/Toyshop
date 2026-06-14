"use client";
import React from "react";
import Navvar from "./Navvar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/dashboard")) return null;
  if (pathName.startsWith("/auth")) return null;

  return (
    <div>
      <Navvar />
    </div>
  );
};

export default Header;
