
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import Link from "next/link";
import FeedCont from "@/utils/feedCont";
import { Suspense } from "react";


export default async function Feed() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Feed</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <Link className="trail-text" href="/">Home</Link>{'>'} 
            <Link className="trail-text" href="/feed">Feed</Link>
          </div>
          <ThemeSlider />
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">My Feed!</h1>

          <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
            <FeedCont searchParams={undefined} />
          </Suspense>

        </div>

      </div>

    </div>
  );
}

