
import { App } from "@/utils/actions";
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
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Apps And Projects:</h1>
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
                    <Image className="section-image" src={val.image} width={150} height={150} alt={val.title} loading="eager" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div> 

          <div className="nav-btn more-button mt-2.5 font-accent"> 
            <a className="flex font-bitcount font-navbar nav-btn-a" href="#">LOAD MORE</a>
          </div>
        </div>
        
      </div>

    </div>
  );
}

