
import { Certification } from "@/utils/actions";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import { notFound } from 'next/navigation'

export default async function Activity({
  params
}: {
  params: Promise<{sVal: string}>;
}) {

  const certifications = await Certification();
  const pageIdent = (await params).sVal;
  const entry = certifications[pageIdent as keyof typeof certifications];
  if (!entry) return notFound();
  const pageTitle : String = "Freddie Robinson - " + entry.title;

  return (
    
    <div className="app-container">

      <title>{pageTitle}</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="/">Home</a>{'>'} 
            <a className="trail-text" href="/certifications">Certifications</a>{'>'} 
            <a className="trail-text" href="#">{entry.title}</a>
          </div>
         <ThemeSlider />
        </div>

        <div className="section-cont-col mb-[1rem]"> 
          <div className="entry-content mb-2.5">

            <div className="section-cont-col pr-[2.5rem]">
              <h1 className="font-heading font-bitcount font-accent pl-[1px]">{entry.title}</h1>
              <div className="font-normal font-merri fontcol2">
                <p className="font-merri">{entry.body}</p>
              </div>
              <div className="font-roboto font-small fontcol1 flex mt-[0.75rem]"> 
                <p>{entry.date}</p> 
              </div>
              <div className="flex flex-row w-full gap-[0.5rem] mt-[0.5rem]">
                {entry.site && (
                  <div className="nav-btn-highlight more-button mt-2.5 font-accent"> 
                    <a className="flex font-bitcount font-navbar nav-btn-a" target="_blank" href={entry.site}>VISIT</a>
                  </div>
                )}
              </div>
            </div>
            
            {entry.image && (
              <div className="entry-thumbnail">
                <Image className="entry-image" src={entry.image} width={750} height={750} alt={entry.title} loading="eager" decoding="async" fetchPriority="high"></Image>
              </div>
            )}
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col mt-[1rem]">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Latest Certifications:</h1>

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {certifications && (Array.isArray(certifications) ? certifications : Object.values(certifications)).map((val: any, index: number) => index < 2 && ( 
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
                    <Image className="section-image" src={val.image} width={250} height={250} alt={val.title} loading="eager" decoding="async" />
                  </div>
                )}
              </a>
            ))}
          </div> 

        </div>

      </div>

    </div>
  );
}

