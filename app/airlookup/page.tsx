
"use client";

import { SearchBar } from "@/utils/lookupCont";

export default function LookupHome() {

  return (

    <div className="flex w-full h-full overflow-hidden pt-[10rem] pb-[5rem] justify-center">

      <div className="flex w-[90%] h-full flex-col items-start max-w-[77.25rem] overflow-hidden">
        <title>Freddie Robinson - AirLookup</title>

        <a className="lumob-title-oride no-wrap flex pl-[1.75rem] text-[7.25rem] cursor-default bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent font-bebas">AirLookup Search:</a>
        <SearchBar />
      </div>

    </div>

  );
}