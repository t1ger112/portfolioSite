
import MapViewer from "@/utils/dynamicMapViewer";
import TravelCarousel from "@/utils/travelMainCarousel";

type FeedPageProps = {
    searchParams?: Promise<{ slideId?: string | string[] }>;
};

export default async function FeedCont({ searchParams }: FeedPageProps) {
    const resolvedSearchParams = await searchParams;
    const rawSlideId = Array.isArray(resolvedSearchParams?.slideId)
        ? resolvedSearchParams?.slideId[0]
        : resolvedSearchParams?.slideId;
    const parsedSlideId = rawSlideId ? Number(rawSlideId) : undefined;
    const initialSlideId = Number.isFinite(parsedSlideId as number)
        ? parsedSlideId
        : undefined;

    return (

        <div className="flex mt-2 w-full aspect-[24/9] travelsection-mobile-cont rounded-lg overflow-hidden background-grad1 border border-solid border-gray-400/20 ">
            <div className="flex flex-row travelsection-mobile w-full p-0 overflow-hidden">
                <div className="flex w-2/6 h-full relative background-grad1 border-r border-solid border-gray-400/20 width-Oride">
                    <MapViewer />
                </div>
                <div className="flex w-4/6 items-center justify-center background-grad2 border-t border-solid border-gray-400/20 width-Oride">
                    <TravelCarousel initialSlideId={initialSlideId} />
                </div>
            </div>
        </div>

    );
}