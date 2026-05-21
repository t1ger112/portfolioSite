
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import Link from "next/link";
import MapViewer from "@/utils/dynamicMapViewer";
import ClusterExample from "@/utils/clusteredMapViewer";

export default function Feed() {

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
          {/* <p className="font-normal font-merri flex">temp</p>  */}

          <div className="divider"></div>

          <div className="flex w-full rounded-lg overflow-hidden background-grad1 border border-solid border-gray-200/20"> 
            <div className="flex flex-row w-full h-full p-0 overflow-hidden">
              <div className="flex w-2/6 h-full relative background-grad1"> 
                <MapViewer />
              </div>
              <div className="flex w-4/6 items-center justify-center background-grad2">
                <p className="font-merri text-muted-foreground">Map viewer currently under construction, please check back again soon...</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}

