// import Image from "next/image";
import { FeaturedActivity, App, Certification} from "@/utils/actions";
import ThemeSlider from "@/utils/themeSlider";

export default async function About() {

    const featuredActivities = await FeaturedActivity();
    const certifications = await Certification();
    const apps = await App();

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Info</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="/">Home</a>{'>'} 
            <a className="trail-text" href="/info">Info</a>{'>'} 
            <a className="trail-text" href="#">Digital CV</a>
          </div>
          <ThemeSlider />
        </div>


        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">About Me:</h1>

          <a className="font-normal content-width-limit font-merri mb-2.5">
            I have been interested in technology and computing since early primary
            school, as it required logical thinking and utilising problem solving skills. I
            have further continued my studies into technology throughout high school,
            college and into the present day at university, where I constantly strive to
            learn and upgrade my skills.
          </a>
          <a className="font-normal content-width-limit font-merri mb-2.5">
            I have undertaken many different leadership roles and activities within and
            outside of an academic setting. For example, as a patrol leader at Scouts,
            Head Student of my high school, and many more. These roles often
            involved speaking in front of large amounts of people. As a result, this has
            helped hone my communication and presentation skills, and also my
            ability to work effectively alongside both peers and senior figures alike.
          </a>
          <a className="font-normal content-width-limit font-merri">
            My many hobbies are mostly related to technology, media, and military aviation.
          </a>
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
                  <div className="font-large font-merri textOride education-oRide">
                      <a className="font-merri font-bold">Manchester Metropolitan University,</a> 
                      <a className="education-padding-oRide">Manchester</a>
                  </div>
                  <div className="font-roboto font-small fontcol1 flex pb-2">
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
                  <div className="font-large font-merri textOride education-oRide">
                      <a className="font-merri font-bold">Priestley College,</a> 
                      <a className="education-padding-oRide">Warrington</a>
                  </div>
                  <div className="font-roboto font-small fontcol1 flex pb-2">
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
                  <div className="font-large font-merri textOride education-oRide">
                      <a className="font-merri font-bold">Birchwood Community High School,</a> 
                      <a className="education-padding-oRide">Warrington</a>
                  </div>
                  <div className="font-roboto font-small fontcol1 flex pb-2">
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

          <a className="font-normal content-width-limit font-merri mb-2.5">
            Passionate about technology and computing, with a desire to constantly upskill in languages and programming knowledge.
          </a>
          <a className="font-normal content-width-limit font-merri mb-2.5">
            The ability to either work as a part of, or lead teams, through utilising my skills and extensive experience in leadership roles.
          </a>
          <div className="section-cont-row gap-10 mt-2.5 list-Oride">
            <a className="font-normal content-width-limit font-merri">
              <b className="font-accent font-bitcount font-large">Proficient in:</b>
              <ul className="ml-3 mt-1">
                <li>Office 365 Apps Suite</li>
                <li>Visual Basic (.NET)</li>
                <li>Python</li>
                <li>HTML, CSS, JS (Web)</li>
                <li>MySQL, SQLite, Access</li>
              </ul>
            </a>
            <a className="font-normal content-width-limit font-merri mb-2.5">
              <b className="font-accent font-bitcount font-large">Currently learning:</b>
              <ul className="ml-3 mt-1">
                <li>C# (.NET)</li>
                <li>Networking</li>
                <li>CISCO Packet Tracer</li>
                <li>Java Apps</li>
              </ul>
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Featured Activities:</h1>

          <div className="section-cont-row gap-Oride mt-2.5 wrap"> 
            {featuredActivities && (Array.isArray(featuredActivities) ? featuredActivities : Object.values(featuredActivities)).map((val: any, index: number) => index < 4 && ( 
              <a id={val.link} key={index} href={val.link} className="section-entry-half prefaceOrideStatic"> 
                <div className="vert-preface"></div>
                <div className="prefaced-contents">
                  <div className="font-large font-merri textOride">
                      <p className="font-merri font-bold">{val.title}</p>
                  </div>
                  <div className="font-roboto font-small fontcol1 flex pb-1">
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

          <div className="nav-btn more-button mt-2.5 font-accent flex"> 
            <a className="flex font-bitcount nav-btn-a font-navbar " href="/activity">VIEW MORE</a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px] pb-2">Certifications:</h1>

          <div className="section-cont-row gap-Oride mt-1 wrap"> 
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

          <div className="nav-btn more-button mt-2.5 font-accent flex"> 
            <a className="flex font-bitcount nav-btn-a font-navbar " href="/certifications">VIEW MORE</a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Projects:</h1> 

          <div className="font-normal font-merri content-width-limit flex flex-col gap-2">
            <div>
               <p>Most notably, winner of Inversity challenge #3, with Faculty AI and the Royal Air Force, for my “Flight-Data App” designed for RAF aircrew. View my most <a className="font-link" href="/apps">recent apps and projects</a> here:</p>
            </div>

            <div className="section-cont-row gap-Oride mt-4 mb-0 wrap"> 
              {apps && (Array.isArray(apps) ? apps : Object.values(apps)).map((val: any, index: number) => index < 2 && ( 
                <a id={val.link} key={index} href={val.link} target="_blank" className="section-entry-half prefaceOrideStatic"> 
                  <div className="vert-preface"></div>
                  <div className="prefaced-contents">
                    <div className="font-large font-merri textOride">
                        <p className="font-merri font-bold">{val.title}</p>
                    </div>
                    <div className="font-small fontcol1 flex pb-2">
                        <p className="font-roboto">{val.date}</p> 
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
            <div>
              <p>Examples and information on all my activities, achievements, and project code repositories are available via the following resources:</p>
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

