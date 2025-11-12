
import { Certification } from "@/utils/actions";

export default async function About() {

  const certifications = await Certification();

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Certifications</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Certifications</a> 
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
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Certifications:</h1>
          <p className="font-normal font-merri flex">My latest official training certifications and awards: </p> 

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 
            {certifications && (Array.isArray(certifications) ? certifications : Object.values(certifications)).map((val: any, index: number) => index < 10 && ( 
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
                  <img className="section-image" src={val.image} alt={val.title} loading="eager" decoding="sync" fetchPriority="high"></img>
                </div>
              </a>
            ))}
          </div> 

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="/activity">LOAD MORE</a>
          </div>
        </div>
        
      </div>

    </div>
  );
}

