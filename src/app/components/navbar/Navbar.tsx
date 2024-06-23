"use client";
import type React from "react";
import { Suspense } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import "./Navbar.css";

import BarTools from "./BarTools";
type NavbarProps = {};
export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className=" border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Suspense>
              <Search />
            </Suspense>
            <BarTools />
          </div>
        </Container>
      </div>
    </div>
  );
};
