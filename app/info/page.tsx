//import Image from "next/image";

import { Activity, App, Certification} from "@/utils/actions";

export default async function About() {

    const activities = await Activity();
    const certifications = await Certification();
    const apps = await App();

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Info</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Info</a>{'>'} 
            <a className="trail-text" href="#">Digital CV</a>
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


        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">About Me:</h1>

          <a className="font-normal font-merri">Temp about section</a>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Education:</h1>

          <a className="font-normal font-merri flex pb-5">                            
              Currently studying degree-level Computer Science at Manchester Metropolitan University:
          </a>

          <div className="section-entry prefaceOride mb-2"> 
              <div className="vert-preface prefaceBlue"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Manchester Metropolitan University,</a> 
                      <a className="pl-2">Manchester</a>
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2024 - <i>Current</i></a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">Yr.2</a>
                      <a className="font-merri pl-1.5">Computer Science</a>
                      <a className="font-merri font-italic pl-1">BSc (Hons)</a>
                  </div>
              </div>
          </div>

          <div className="section-entry prefaceOride mb-2.5">
              <div className="vert-preface"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Priestley College,</a> 
                      <a className="pl-2">Warrington</a>
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2022 - July 2024</a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">[OCR]</a>
                      <a className="font-merri pl-1.5">A-Level Computer Science -</a>
                      <a className="font-merri font-italic pl-1">Grade:</a>
                      <a className="font-merri font-italic font-bold pl-1">A</a>
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">[Pearson]</a>
                      <a className="font-merri pl-1.5">BTEC Lvl3 National Diploma in IT -</a>
                      <a className="font-merri font-italic pl-1">Grades:</a>
                      <a className="font-merri font-italic font-bold pl-1">Dist* / Dist*</a>
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">[OCR]</a>
                      <a className="font-merri pl-1.5">AS-Level Media Studies -</a>
                      <a className="font-merri font-italic pl-1">Grade:</a>
                      <a className="font-merri font-italic font-bold pl-1">A</a>
                  </div>
              </div>
          </div>

          <div className="section-entry prefaceOride mb-2.5"> 
              <div className="vert-preface"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Birchwood Community High School,</a> 
                      <a className="pl-2">Warrington</a>
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2017 - July 2022</a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">Grade [7] in:</a>
                      <a className="font-merri pl-1.5">x7 GCSE Subjects</a>
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri font-bold ">Grade [6] in:</a>
                      <a className="font-merri pl-1.5">x2 GCSE Subjects</a>
                  </div>
                  <div className="font-normal font-merri fontcol2 flex flex-row">
                      <a className="font-merri font-bold no-wrap">Key Roles:</a>
                      <a className="font-merri pl-1.5">Head Student, School Council Member, Eco-Committee (Communications Manager)</a>
                  </div>
              </div> 
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Skills:</h1>

          <a className="font-normal font-merri">Temp section</a>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px] pb-2">Certifications:</h1>

          <div className="section-cont-row gap-[2%] pt-1 wrap">

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

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Featured Activities:</h1>

          <a className="font-normal font-merri">Temp section</a>

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 

            <div className="section-entry-cert prefaceOrideStatic"> 
              <div className="vert-preface"></div>
              <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <a className="font-merri font-bold">Activity Title</a> 
                  </div>
                  <div className="font-open font-small fontcol1 flex pb-2">
                      <a>September 2024 - <i>Current</i></a> 
                  </div>
                  <div className="font-normal font-merri fontcol2">
                      <a className="font-merri">Description of Activity...</a>
                  </div>
              </div>
            </div>

          </div>  
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Projects:</h1> 

          <div className="font-normal font-merri content-width-limit flex flex-col gap-2">
            <div>
               <a>Most notably, winner of Inversity challenge #3, with Faculty AI and the Royal Air Force, for my “Flight-Data App” designed for RAF aircrew. View my most recent projects here:</a>
            </div>
            <div className="p-2">
              <a>#### Projects Section ####</a>
            </div>
            <div>
              <a>Examples and information on all my activities, achievements, and project code repositories are available on the following resources:</a>
            </div>
            <div className="font-normal pt-1">
              <div className="no-wrap section-cont-row">
                <a className="pr-2">LinkedIn:</a>
                <a className="font-link" target="_blank" href="https://linkedin.com/in/freddiemichaelrobinson">https://linkedin.com/in/freddiemichaelrobinson</a>
              </div>
              <div className="no-wrap section-cont-row">
                <a className="pr-2">GitHub:</a>
                <a className="font-link" target="_blank" href="https://github.com/t1ger112">https://github.com/t1ger112</a>
              </div>
            </div>
          </div>
        
        </div>

      </div>

    </div>

  );
}

