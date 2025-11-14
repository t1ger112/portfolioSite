// import Image from "next/image";
import { RecentActivity, App, Certification} from "@/utils/actions";
import ThemeSlider from "@/utils/themeSlider";

export const runtime = 'edge';

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
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Welcome to my Portfolio!</h1>
          <a className="font-normal font-merri flex content-width-limit">Hi I'm Freddie, currently studying undergraduate Computer Science at Manchester Metropolitan Univerity. This is my portfolio site for showcasing all my activities, certifications,  projects, apps, digital CV, and more. My many hobbies are mostly related to technology, media, and aviation.</a>
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Activity:</h1>
          <p className="font-normal font-merri flex">My latest activities and events that I have completed or attended:</p> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {activities && (Array.isArray(activities) ? activities : Object.values(activities)).map((val: any, index: number) => index < 4 && ( 
              <a id={val.link} key={index} href={val.link} className="section-entry-half prefaceOrideStatic"> 
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
                <div className={(val.image) ? "section-thumbnail" : "hidden"}>
                  <img className="section-image" src={val.image} alt={val.title} loading="eager" decoding="async" fetchPriority="high"></img>
                </div>
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
              <a id={val.link} key={index} href={val.link} className="section-entry-half prefaceOrideStatic"> 
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
                <div className={val.image ? "section-thumbnail" : "hidden"}>
                  <img className="section-image" src={val.image} alt={val.title} loading="lazy" decoding="async"></img>
                </div>
              </a>
            ))}
          </div> 

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="/certifications">VIEW MORE</a>
          </div>    
        </div>

        <div className="divider"></div>
        
        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Apps:</h1>
          <a className="font-normal font-merri flex">My most recent apps, programs and projects:</a> 

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {apps && (Array.isArray(apps) ? apps : Object.values(apps)).map((val: any, index: number) => index < 4 && ( 
              <a id={val.link} key={index} href={val.link} target="_blank" className="section-entry-half prefaceOrideStatic"> 
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
                <div className={val.image ? "section-thumbnail" : "hidden"}>
                  <img className="section-image" src={val.image} alt={val.title} loading="lazy" decoding="async"></img>
                </div>
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

