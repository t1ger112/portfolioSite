
import GalleryViewer from "@/utils/galleryViewer";
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import Link from "next/link";

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/kibo-ui/video-player";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";


export default async function Gallery() {


  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Gallery</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <Link className="trail-text" href="/">Home</Link>{'>'} 
            <Link className="trail-text" href="/gallery">Gallery</Link>
          </div>
          <ThemeSlider />
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading font-bitcount font-accent pl-[1px]">Gallery:</h1>
          <p className="font-normal font-merri flex">Page currently under construction, please check back again soon...</p> 
          
          <div className="divider"></div>

          {/* <GalleryViewer /> */}

          <div>


            <div> {/* interactive map links area */} 

              <div className="flex flex-col items-start gap-4">
                <h2 className="font-heading font-bitcount font-accent text-2xl">Interactive Map:</h2>
              </div>

              <div className="flex size-full items-center justify-center bg-background">

                <Card className="h-100 w-full p-0 overflow-hidden">
                  <Map center={[-74.006, 40.7128]} zoom={11}>
                    <MapControls />
                  </Map>
                </Card>
                
              </div>
 
            </div>

            <div className="divider"></div>

            <div>
              <VideoPlayer className="overflow-hidden rounded-lg">
                <VideoPlayerContent
                  crossOrigin=""
                  autoPlay
                  muted
                  loop
                  suppressHydrationWarning
                  preload="auto"
                  slot="media"
                  src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
                />
                <VideoPlayerControlBar>
                  <VideoPlayerPlayButton />
                  <VideoPlayerSeekBackwardButton />
                  <VideoPlayerSeekForwardButton />
                  <VideoPlayerMuteButton />
                  <VideoPlayerTimeRange />
                  <VideoPlayerTimeDisplay showDuration />
                </VideoPlayerControlBar>
              </VideoPlayer>
            </div>
            
            {/* <div className="divider"></div> */}

            {/* <div className="flex size-full items-center justify-center bg-background">
              <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent autoFill={false} pauseOnHover={false}> 
                  {new Array(10).fill(null).map((_, index) => (
                    <MarqueeItem className="mx-1 h-32 w-32" key={index}>
                      <img
                        alt={`Placeholder ${index}`}
                        className="overflow-hidden rounded-lg"
                        src={`https://placehold.co/128x128?random=${index}`}
                      />
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div> */}


          </div>
          
        </div>

      </div>

    </div>
  );
}

