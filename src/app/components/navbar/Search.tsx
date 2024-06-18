"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const Search = () => {
  const params = useSearchParams();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "🔎 Searching anything here...";
  }, [guestCount]);

  return (
    <div
      className="
      border-[1px] 
      w-full 
      md:w-auto 
      py-2 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    "
    >
      <div
        className="
        flex 
        flex-row 
        items-center 
        justify-between
      "
      >
        <div
          className="
          text-sm 
          pl-6 
          pr-2 
          text-white-600 
          flex 
          flex-row 
          items-center 
          gap-6
          
        "
        >
          <div className="hidden sm:block">{guestLabel}</div>
          <div
            className="
            p-2 
            bg-black 
            rounded-full 
            text-black
          "
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Search;
