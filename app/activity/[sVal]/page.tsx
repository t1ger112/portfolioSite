
import { RecentActivity } from "@/utils/actions";
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
          <div className="entry-content mb-2.5">

            <div className="section-cont-col pr-[2.5rem]">
              <h1 className="font-heading font-bitcount font-accent pl-[1px]">{entry.title}</h1>
              <div className="font-roboto font-small fontcol1 flex pb-4"> 
                  <p>{entry.date}</p> 
              </div>
              <div className="font-normal font-merri fontcol2">
                  <p className="font-merri">{entry.body}</p>
              </div>
            </div>

            <div className={(entry.image) ? "entry-thumbnail" : "hidden"}>
              <img className="entry-image" src={entry.image || undefined} alt={entry.title} loading="eager" decoding="async" fetchPriority="high"></img>
            </div>

          </div>
        </div>

        <div className="section-cont content-col mt-10">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">More Activities:</h1>

          <div className="section-cont-row gap-[2%] mt-5 wrap"> 
            {activities && (Array.isArray(activities) ? activities : Object.values(activities)).map((val: any, index: number) => index < 2 && ( 
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

        </div>

      </div>

    </div>
  );
}

