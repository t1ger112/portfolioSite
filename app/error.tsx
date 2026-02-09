"use client";

export default function error() {
  return (

    <div className="flex h-[91vh] w-full overflow-hidden">
        <div className = "err-oride flex flex-row w-full h-full items-center justify-center pb-[10%] ">
          
          <title>Freddie Robinson - PAGE ERROR</title> 
          
          <div className="pt-[1.75rem]">
            <a className="flex pl-6 text-[4rem] bebas"> OOPS, Something Went Wrong!</a>
            <a className="flex pl-6 text-[1.5rem] bebas">Try reloading the page...</a>
          </div>

        </div>
      </div>
    
  );
}