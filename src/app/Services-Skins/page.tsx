import thirdwebIcon from "@public/thirdweb.svg";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import Model from "../components/Model";
import React from "react";

const Eyes: React.FC = () => {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Model />
      </div>
    </main>
  );
};

export default Eyes;
