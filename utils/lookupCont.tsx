"use client";

import execLookup from "@/app/actions/searchWorker";
import React from "react";

export function SearchBar() {

  const [returnList, setReturnList] = React.useState<any>(null);
  const [showMore, setShowMore] = React.useState<number>(2);

  function setView(opcode : number){
    const s = document.getElementById("lookup-search-btn");
    const c = document.getElementById("lookup-clear-btn");
    const r = document.getElementById("resultsWindow");
    const n = document.getElementById("noResultsWindow");
    const l = document.getElementById("lookup-load-icon");
    const m = document.getElementById("messageWindow");

    if (opcode == 0 && l && c && s) { //loading
      l.style.display = "flex";
      c.style.display = "none"; 
      s.style.display = "none";
    } else if (opcode == 1 && l && c && s && r && m && n) { // valid results
      l.style.display = "none";
      c.style.display = "flex"; 
      s.style.display = "none"; 
      r.style.display = "flex";
      m.style.display = "none";
      n.style.display = "none";
    } else if (opcode == 2 && l && c && s && r && m && n) { // no results
      l.style.display = "none";
      c.style.display = "flex"; 
      s.style.display = "none"; 
      r.style.display = "none";
      m.style.display = "none";
      n.style.display = "flex";
    } else {
      if (s && c && r && m && n && l){  // default
        s.style.display = "flex";
        c.style.display = "none";
        r.style.display = "none";
        n.style.display = "none";
        l.style.display = "none";
        m.style.display = "flex";
      }
    }
  }

  async function change(){  
    try {
      if ((document.getElementById("searchbar-id") as HTMLInputElement).value.length <= 0) {
        setView(99); // empty input
      } else {
        await search((document.getElementById("searchbar-id") as HTMLInputElement).value);
      }
      if ((document.getElementById("searchbar-id") as HTMLInputElement).value.length <= 0) {
        setView(99); // empty input
      }
    } catch (error) {
      setView(2);  // error
    }
  }

  async function search(sbarval: string) {
    
    try {
      setView(0); // loading
      const results = await execLookup(sbarval);

      if (results && results.resultOut && results.resultOut.values && results.resultOut.values.length > 0) {
        setReturnList(results);
        setView(1); // valid results
      } else {
        setView(2); // no results
      }
    } catch (error) {
      setView(2);  // error
    }
  }

  const clear = () => {
    try {
      const sbar = document.getElementById("searchbar-id") as HTMLInputElement;
      if (sbar) sbar.value = "";
      setView(99); // empty input
    } catch (error) {
      // do nothing 
    }
  }

  function showMoreResults() {
    try {
      if (showMore < (returnList.resultOut.values.length)) {
        if (document.getElementById("sh-more-btn")) {
          document.getElementById("sh-more-btn")!.innerHTML = "SHOW LESS";
          setShowMore(returnList.resultOut.values.length);
        }
      } else {
        if (document.getElementById("sh-more-btn")) {
          document.getElementById("sh-more-btn")!.innerHTML = "SHOW MORE";
          setShowMore(2);
        }
      }
    } catch (error) {
      // do nothing
    }
  }
  
  function link(redirectVal: string) {
    window.location.href = "http://" + window.location.host + "/airlookup/" + redirectVal;
  }

  return (
    <div className="flex flex-col gap-[0.75rem] w-full">

      <div className = "flex w-full bg-blue-600 p-[0.375rem] pr-[1.1rem] rounded-full align-center justify-between spinnyBg bg-linear-to-r from-blue-500 to-red-700">
        
        <input id="searchbar-id" className="lumob-sbar-oride flex font-bebas rounded-full blackout pt-[0.4rem] pb-[0.1rem] pl-[1.25rem] pr-[1.25rem] w-full text-[2rem] bg-blue-100 ml-[0.5px] mr-[0.95rem]" onChange={() => change()} placeholder="Start typing to search..." maxLength={25} type="text"/>

        <div id="lookup-search-btn" className="flex align-center"> 
          <button className="flex items-center hover:cursor-pointer relative top-[0.05rem] right-[0.05rem]" onClick={change}>
            <svg className=" p-[0.2rem] scale-[125%]" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.4rem" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        <div id="lookup-clear-btn" className="hidden align-center">
          <button className="flex items-center hover:cursor-pointer relative top-[0.05rem] right-[0.05rem]" onClick={clear}>
            <svg className="hover:fill-[#ff9e9e] p-[0.2rem] scale-[150%] duration-200" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M251.33-178 178-251.33 406.67-480 178-708.67 251.33-782 480-553.33 708.67-782 782-708.67 553.33-480 782-251.33 708.67-178 480-406.67 251.33-178Z"></path></svg>
          </button>
        </div>

        <div id="lookup-load-icon" className="flex hidden align-center">
          <button className="flex items-center relative top-[0.05rem] right-[0.05rem]">
            <svg id="load-icon-id" className="p-[0.2rem] scale-[125%] duration-200" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-60.78q-86.52 0-162.9-32.96-76.37-32.95-133.39-89.97-57.02-57.02-89.97-133.39Q60.78-393.48 60.78-480q0-87.04 32.95-163.06 32.95-76.03 89.96-133.18 57.01-57.15 133.4-90.07 76.39-32.91 162.91-32.91 22.09 0 37.54 15.46Q533-868.3 533-846.22q0 22.09-15.46 37.55-15.45 15.45-37.54 15.45-130.18 0-221.7 91.52-91.52 91.52-91.52 221.69 0 130.18 91.52 221.71 91.52 91.52 221.69 91.52 130.18 0 221.71-91.52 91.52-91.52 91.52-221.7 0-22.09 15.45-37.54Q824.13-533 846.22-533q22.08 0 37.54 15.46 15.46 15.45 15.46 37.54 0 86.52-32.95 162.92-32.95 76.4-89.96 133.44-57.01 57.03-133.1 89.95Q567.12-60.78 480-60.78Z"/></svg>
          </button>
        </div>

      </div>


      <div id="resultsWindow" className="hidden flex-col">
        <div className="flex flex-row gap-[0.99rem] w-full">
          <a className="flex pl-6.5 text-[1.75rem] font-bebas"> Results:</a>
          <button id="sh-more-btn" className="flex w-fit self-center text-[1.5rem] opacity-80 font-bebas hover:cursor-pointer hover:opacity-50 duration-200" onClick={() => showMoreResults()}>SHOW MORE</button>
        </div>

        <div className="flex flex-col w-full h-auto flex-col rounded-[1.6rem] bg-linear-to-r from-blue-500 to-red-700 p-[0.425rem]">
          <div id="freqData" className = "flex flex-col gap-[0.45rem] blackout"> 
            {returnList && returnList.resultOut && Array.isArray(returnList.resultOut.values) &&
              returnList.resultOut.values.map((val: [string, string, string, string, string], index: number) => index < showMore &&( 
                <div key={index} className="flex flex-row w-full justify-between hover:cursor-pointer duration-200 hover:opacity-70" onClick={() => link(String(val[0] || "error"))}> 
                  <div className="flex w-full rounded-[1.25rem]"> 
                    <div className="search-grid rounded-[1.25rem] bg-blue-100 pt-1 pl-5 w-full"> 
                      <a className="flex text-[1.75rem] font-bebas self-center overflow-hidden whitespace-nowrap ">{val[0] || ""}</a>
                      <a className="flex text-[1.75rem] font-bebas self-center overflow-hidden whitespace-nowrap">{val[1] || ""}</a>
                      <a className="flex text-[1.75rem] font-bebas self-center overflow-hidden whitespace-nowrap justify-center">{val[2] || ""}</a>
                      <a className="flex text-[1.75rem] font-bebas self-center overflow-hidden whitespace-nowrap justify-center">{val[3] || ""}</a>
                      <a className="flex text-[1.75rem] font-bebas self-center overflow-hidden whitespace-nowrap justify-center">{val[4] || ""}</a>
                    </div>
                  </div>
                  <div className="flex align-center">
                    <button className="flex items-center hover:cursor-pointer relative top-[1]">
                      <svg className="p-1 scale-[120%] duration-200" xmlns="http://www.w3.org/2000/svg" width="4rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  </div> 
                </div>
              ))}
          </div>
        </div>
      </div>
      
      <div id="messageWindow" className="mt-[1.75rem] flex flex-col cursor-default">
        <a className="flex pl-[1.75rem] text-[2rem] font-bebas"> Lookup the details of 80,000+ airfields using this database search tool!</a>
        <a className="flex pl-[1.75rem] text-[2rem] font-bebas"> Use any unique identifier such as: ident codes, names, nicknames, etc...</a>
        <div className="inline-flex flex-row">
          <a className="flex pl-[1.75rem] pt-[1rem] text-[1.5rem] font-bebas text-blue-300 hover:opacity-75 duration-200" target="_blank" href="https://ourairports.com">PROTOTYPE - EXPECT INACCURACIES - DATA FROM OURAIRPORTS.COM</a>
        </div>
      </div>

      <div id="noResultsWindow" className="mt-[1.75rem] hidden flex flex-col cursor-default"> 
        <a id="noResTitle" className="flex pl-[1.75rem] text-[2.5rem] font-bebas text-red-300"> No Results Found!</a>
        <a id="noResText" className="flex pl-[1.75rem] text-[1.5rem] font-bebas"> Please check the input is spelt correctly, or try some other search criteria...</a>
      </div>

    </div>
  );
}
