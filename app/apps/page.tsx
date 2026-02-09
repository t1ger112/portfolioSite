
import { App } from "@/utils/actions";
import { SearchBar } from "@/utils/lookupCont";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";

export default async function About() {

  const apps = await App();

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Apps</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Apps</a> 
          </div>
          <ThemeSlider />
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Project Showcase:</h1>
          <a className="font-normal font-merri flex">My AirLookup prototype uses simple SQL queries integrated via SQL.js to search through a SQLite database of related airfield data, try it out below:</a> 

          <div className="section-cont-row mt-6 mb-2">
            <div className="lumob-box-oride overflow-hidden flex bg-gradient-to-br from-[#163d7d] via-[#242424] to-[#381515] rounded-lg p-[3.25rem] pt-[2.25rem] w-full min-h-[32.5rem] hover:saturate-130 duration-300 ease-in">  
                <div className="flex w-full flex-col gap-0 align-left">
                  <a className="lumob-title-oride no-wrap flex pl-[1.75rem] text-[7.25rem] cursor-default bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent font-bebas">AirLookup Search:</a> 
                  <SearchBar />
                </div>
            </div>
          </div>

        </div>

        <div className="divider"></div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Latest Apps:</h1>
          <p className="font-normal font-merri flex">My most recent apps, programs and projects:</p> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {apps && (Array.isArray(apps) ? apps : Object.values(apps)).map((val: any, index: number) => index < 10 && ( 
              <a id={val.link} key={index} href={val.link} title={"View this " + val.title + " project..."} className="section-entry-half prefaceOrideStatic"> 
                <div className="vert-preface"></div>
                <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <p className="font-merri font-bold">{val.title}</p>
                  </div>
                  <div className="font-roboto font-small fontcol1 flex pb-2"> 
                      <p>{val.date}</p> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <p className="font-merri">{val.body}</p>
                  </div>
                </div>
               {val.image && (
                  <div className="section-thumbnail">
                    <Image className="section-image" src={val.image} width={250} height={250} alt={val.title} loading="eager" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div> 

          {/* <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="#">LOAD MORE</a>
          </div> */}
        </div>
        
      </div>

    </div>
  );
}

