
import { RecentActivity, App, Certification} from "@/utils/actions";
import { SearchBar } from "@/utils/lookupCont";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";

export default async function Home() {

  const activities = await RecentActivity();
  const certifications = await Certification();
  const apps = await App();
  
  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Home</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'}
            <a className="trail-text" href="./">Portfolio</a>  
          </div>
          <ThemeSlider />
        </div>


        <div className="section-cont content-col">  
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Hello World, I'm Freddie!</h1>
          <a className="font-normal font-merri flex content-width-limit">Currently studying undergraduate Computer Science at Manchester Metropolitan University. This is my portfolio site showcasing all of my activities, certifications, apps and projects, my digital CV, and more:</a>
        </div>


        <div className="divider"></div>


        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Activity:</h1>
          <p className="font-normal font-merri flex">My latest activities and events that I have completed or attended:</p> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {activities && (Array.isArray(activities) ? activities : Object.values(activities)).map((val: any, index: number) => index < 4 && ( 
              <a id={val.link} key={index} href={val.link} title={"View this " + val.title + " activity..."} className="section-entry-half prefaceOrideStatic"> 
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
                    <Image className="section-image" src={val.image} width={275} height={275} quality={75} alt={val.title} loading="eager" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div> 

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="/activity">VIEW MORE</a>
          </div>
        </div>


        <div className="divider"></div>


        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Digital CV:</h1>
          <a className="font-normal font-merri flex">Click here to view the latest copy of my digital CV:</a> 

          <a className="section-entry prefaceOride mt-2.5 mb-2" href="/info"> 
              <div className="vert-preface prefaceBlue"></div>
              <div className="prefaced-contents">
                  <div className="flex font-large font-merri textOride education-oRide">
                      <p className="font-merri font-bold">Freddie Robinson,</p> 
                      <p className="education-padding-oRide">Computer Science Student</p>
                  </div>
                  <div className="flex font-open font-small fontcol1 flex pb-2">
                      <p>September 2025 - <i>Current Edition</i></p> 
                  </div>
                  <div className="flex font-normal font-merri fontcol2"> 
                      <p className="font-merri font-bold ">Yr.2</p>
                      <p className="font-merri pl-1.5">Computer Science</p>
                      <p className="font-merri font-italic pl-1">BSc (Hons)</p>
                  </div>
                   <div className="flex font-normal font-merri fontcol2"> 
                      <p className="font-merri">At Manchester Metropolitan University</p>
                  </div>
              </div>
          </a>
        </div>


        <div className="divider"></div>


        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Certifications:</h1>
          <a className="font-normal font-merri flex">My latest official certifications from courses I have completed:</a> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {certifications && (Array.isArray(certifications) ? certifications : Object.values(certifications)).map((val: any, index: number) => index < 4 && ( 
              <a id={val.link} key={index} href={val.link} title={"View this " + val.title + " certification..."} className="section-entry-half prefaceOrideStatic"> 
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
                    <Image className="section-image" src={val.image} width={200} height={200} alt={val.title} loading="lazy" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div> 

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="/certifications">VIEW MORE</a>
          </div>    
        </div>


        <div className="divider"></div>


        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">App Showcase:</h1>
          <a className="font-normal font-merri flex">My AirLookup prototype uses queries integrated via SQL.js to search through a SQLite database of related airfield data, try it here:</a> 

          <div className="section-cont-row mt-6 mb-2">
            <div className="lumob-box-oride overflow-hidden flex bg-gradient-to-br from-[#163d7d] via-[#242424] to-[#381515] rounded-lg p-[3.25rem] pt-[2.25rem] w-full min-h-[32.5rem] hover:saturate-142 duration-300 ease-in">  
                <div className="flex w-full flex-col gap-0 align-left">
                  <a className="lumob-title-oride no-wrap flex pl-[1.75rem] text-[7.25rem] cursor-default bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent font-bebas">AirLookup Search:</a> 
                  <SearchBar />
                </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        
        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Apps:</h1>
          <a className="font-normal font-merri flex">My most recent apps, programs and projects:</a> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {apps && (Array.isArray(apps) ? apps : Object.values(apps)).map((val: any, index: number) => index < 4 && ( 
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
                    <Image className="section-image" src={val.image} width={200} height={200} alt={val.title} loading="lazy" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div>

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="/apps">VIEW MORE</a>
          </div>
        </div>

      </div>
    </div>
  );
}

