
import ThemeSlider from "@/utils/themeSlider";
import Image from "next/image";
import Link from "next/link";
import MapViewer from "@/utils/dynamicMapViewer";
import TravelCarousel from "@/utils/travelMainCarousel";

type FeedPageProps = {
  searchParams?: Promise<{ slideId?: string | string[] }>;
};

export default async function Feed({ searchParams }: FeedPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawSlideId = Array.isArray(resolvedSearchParams?.slideId)
    ? resolvedSearchParams?.slideId[0]
    : resolvedSearchParams?.slideId;
  const parsedSlideId = rawSlideId ? Number(rawSlideId) : undefined;
  const initialSlideId = Number.isFinite(parsedSlideId as number)
    ? parsedSlideId
    : undefined;

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
          
          <div className="divider"></div>

          <div className="flex w-full aspect-[24/9] rounded-lg overflow-hidden background-grad1 border border-solid border-gray-200/20"> 
            <div className="flex flex-row w-full p-0 overflow-hidden" suppressHydrationWarning>
              <div className="flex w-2/6 h-full relative background-grad1">  
                <MapViewer />
              </div>
              <div className="flex w-4/6 items-center justify-center background-grad2">
                <TravelCarousel initialSlideId={initialSlideId} />
              </div>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}

