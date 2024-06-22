import React, { Suspense } from "react";
import thirdwebIcon from "@public/thirdweb.svg";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import Model from "../components/Model_skins";

const Skins: React.FC = () => {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Model />
        </Suspense>
      </div>
    </main>
  );
};

export default Skins;
