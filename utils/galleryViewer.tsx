
import { RecentActivity } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";

export default async function GalleryViewer() {

    const activities = await RecentActivity();

    return (

        <div>
            
            <div className="section-cont-row gap-Oride mt-7.5 wrap"> 
                {activities && (Array.isArray(activities) ? activities : Object.values(activities)).map((val, index: number) => index < 4 && ( 
                    <Link id={val.link} key={index} href={val.link} title={"View this " + val.title + " activity..."} className="section-entry-half prefaceOrideStatic"> 
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
                    </Link>
                ))}
            </div> 

            <div className="nav-btn more-button mt-3.5 font-accent"> 
                <a className="flex font-bitcount font-navbar nav-btn-a" href="#">LOAD MORE</a>
            </div>

        </div>
      
    );
}

