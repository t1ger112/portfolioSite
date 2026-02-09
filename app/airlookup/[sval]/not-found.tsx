"use client";

export default function Custom404() {
  return (

    <div className="flex h-[91vh] w-full overflow-hidden">
        <div className = "flex flex-row w-full h-full items-center justify-center pb-[10%]">
          
          <title>MASTER CAUTION</title> 

          <div className="flex flex-col p-[2rem] items-center justify-center relative text-yellow-400 hover:opacity-65 duration-250">
            <a className="flex text-[5.5rem] bebas relative top-[2.25rem]" href="/airlookup">MASTER</a>
            <a className="flex text-[5.25rem] bebas relative" href="/airlookup">CAUTION</a>
            <a className="flex text-[2.5rem] bebas relative top-[-1rem]" href="/airlookup">PUSH TO GO BACK</a> 
          </div>
          
          <div className="pt-[1.75rem]">
            <a className="flex pl-6 text-[4rem] bebas">ERROR-404:</a>
            <a className="flex pl-6 text-[1.5rem] bebas">This airfield or page may not exist...</a>
          </div>

        </div>
      </div>
    
  );
}