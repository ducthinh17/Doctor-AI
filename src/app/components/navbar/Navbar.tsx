"use client";

import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import Search from "./Search";
import "./Navbar.css";

import BarTools from "./BarTools";
interface NavbarProps {}
export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className=" border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <BarTools />
          </div>
        </Container>
      </div>
    </div>
  );
};
