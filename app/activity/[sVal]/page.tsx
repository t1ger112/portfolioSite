
import { RecentActivity } from "@/utils/actions";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import { notFound } from 'next/navigation'

export default async function Activity({
  params
}: {
  params: Promise<{sVal: string}>;
}) {

  const activities = await RecentActivity();
  const pageIdent = (await params).sVal;
  const entry = activities[pageIdent as keyof typeof activities];
  if (!entry) return notFound();
  const pageTitle : String = "Freddie Robinson - " + entry.title;
  const activityList = (Array.isArray(activities) ? activities : Object.values(activities))
    .filter((val: any) => val.title !== entry.title)
    .sort(() => Math.random() - 0.5);

  return (
    
    <div className="app-container">

      <title>{pageTitle}</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="/">Home</a>{'>'} 
            <a className="trail-text" href="/activity">Activity</a>{'>'} 
            <a className="trail-text" href="#">{entry.title}</a>
          </div>
          <ThemeSlider />
        </div>

        <div className="section-cont-col mb-[1rem]"> 
          <div className="entry-content mb-2.5 gap-[1rem]">

            <div className="section-cont-col pr-[2rem]">
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
                <Image className="entry-image" src={entry.image} width={400} height={400} alt={entry.title} loading="eager" decoding="async" fetchPriority="high"></Image>
              </div>
            )}
            {entry.image2 && (
              <div className="entry-thumbnail">
                <Image className="entry-image" src={entry.image2} width={400} height={400} alt={entry.title} loading="eager" decoding="async" fetchPriority="high"></Image>
              </div>
            )}
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-cont content-col mt-[1rem]">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Other Activities:</h1>

          <div className="section-cont-row gap-Oride mt-5 wrap"> 
            {activityList.map((val: any, index: number) => index < 4 && (
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

