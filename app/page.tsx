//import Image from "next/image";

import { Activity } from "@/utils/actions";

export default async function Home() {

  const activities = await Activity();
  console.log(activities.a0.title); 

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Home</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'}
            <a className="trail-text" href="./">Portfolio</a>  
          </div>

          <div className="themeCont">
             <div className="themeSlideLabel">
              <a className="font-small">Theme:</a>
            </div>
            <div className="themeSliderCont">
              <a className="font-small themeSlider">Light/Dark</a>
            </div>
          </div>
        </div>


        <div className="section-cont content-col">  
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Welcome to my Portfolio!</h1>
          <a className="font-normal font-merri flex">This is the homepage of my portfolio website.</a>
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Activity:</h1>
          <a className="font-normal font-merri flex">Temp</a> 

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 

            {activities && (Array.isArray(activities) ? activities : Object.values(activities)).map((activity: any, index: number) => ( 
              <div key={index} className="section-entry-cert prefaceOrideStatic"> 
                <div className="vert-preface"></div>
                <div className="prefaced-contents">
                    <div className="font-large font-merri textOride">
                        <a className="font-merri font-bold">{activity.title}</a> 
                    </div>
                    <div className="font-open font-small fontcol1 flex pb-2">
                        <a>{activity.date}</a> 
                    </div>
                    <div className="font-normal font-merri fontcol2">
                        <a className="font-merri">{activity.body}</a>
                    </div>
                </div>
              </div>
            ))}

          </div>  
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Digital CV:</h1>
          <a className="font-normal font-merri flex">Temp</a> 

          <div className="section-entry prefaceOride mt-2.5 mb-2"> 
              <div className="vert-preface prefaceBlue"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Manchester Metropolitan University,</a> 
                      <a className="pl-2">Manchester</a>
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2025 - <i>Current Edition</i></a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">Yr.2</a>
                      <a className="font-merri pl-1.5">Computer Science</a>
                      <a className="font-merri font-italic pl-1">BSc (Hons)</a>
                  </div>
              </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Certifications:</h1>
          <a className="font-normal font-merri flex">Temp</a> 

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 

            <div className="section-entry-cert prefaceOrideStatic"> 
              <div className="vert-preface"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Certification Title</a> 
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2024 - <i>Current</i></a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri">Description of certification...</a>
                  </div>
              </div>
            </div>

          </div>      
        </div>

        <div className="divider"></div>
        
        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Apps:</h1>
          <a className="font-normal font-merri flex">Temp</a> 

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 

            <div className="section-entry-cert prefaceOrideStatic"> 
              <div className="vert-preface"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">App Title</a> 
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2024 - <i>Current</i></a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri">Description of app...</a>
                  </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

