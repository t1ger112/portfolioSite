
import GalleryViewer from "@/utils/galleryViewer";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import Link from "next/link";

export default async function Gallery() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Gallery</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <Link className="trail-text" href="/">Home</Link>{'>'} 
            <Link className="trail-text" href="/Gallery">Gallery</Link>
          </div>
          <ThemeSlider />
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Gallery:</h1>
          <p className="font-normal font-merri flex">Page currently under construction, please check back again soon...</p> 

          <GalleryViewer />
          
        </div>

      </div>

    </div>
  );
}

