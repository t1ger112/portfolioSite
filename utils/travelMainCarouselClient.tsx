"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Slide = {
  id: number;
  name: string;
  country: string;
};

type TravelMainCarouselClientProps = {
  slides: Slide[];
  initialSlideId?: number;
};

type TravelCarouselScrollEvent = CustomEvent<{ slideId?: number | string }>;

const TRAVEL_CAROUSEL_SCROLL_EVENT = "travel-carousel:scroll-to-slide";

function parseSlideId(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  return parsed;
}

export function scrollTravelCarouselToSlide(slideId: number | string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(TRAVEL_CAROUSEL_SCROLL_EVENT, {
      detail: { slideId },
    })
  );
}

export default function TravelMainCarouselClient({
  slides,
  initialSlideId,
}: TravelMainCarouselClientProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const searchParams = useSearchParams();
  const pendingSlideRef = React.useRef<number | string | null>(null);

  const slideIndexById = React.useMemo(() => {
    const indexLookup = new Map<number, number>();
    slides.forEach((slide, index) => {
      indexLookup.set(slide.id, index);
    });
    return indexLookup;
  }, [slides]);

  const scrollToSlideId = React.useCallback(
    (slideId: number | string | null | undefined, instant = false) => {
      if (!api) return false;
      const parsedSlideId = parseSlideId(slideId);
      if (parsedSlideId === null) return false;

      const index = slideIndexById.get(parsedSlideId);
      if (index === undefined) return false;

      api.scrollTo(index, instant);
      return true;
    },
    [api, slideIndexById]
  );

  React.useEffect(() => {
    if (!api) return;

    // If there was a query param target, try that first (instant)
    const queryTarget = parseSlideId(searchParams.get("slideId"));
    if (queryTarget !== null) {
      scrollToSlideId(queryTarget, true);
    }

    // Next try initialSlideId from server prop
    if (initialSlideId !== undefined) {
      scrollToSlideId(initialSlideId, true);
    }

    // If any pending click/scroll was queued before api was ready, flush it now
    if (pendingSlideRef.current !== null) {
      scrollToSlideId(pendingSlideRef.current, true);
      pendingSlideRef.current = null;
    }
  }, [api, initialSlideId, scrollToSlideId, searchParams]);

  React.useEffect(() => {
    const onScrollRequest = (event: Event) => {
      const customEvent = event as TravelCarouselScrollEvent;
      const requested = customEvent.detail?.slideId;
      if (!api) {
        // store pending request to be processed when api becomes ready
        pendingSlideRef.current = requested ?? null;
        return;
      }
      scrollToSlideId(requested);
    };

    window.addEventListener(TRAVEL_CAROUSEL_SCROLL_EVENT, onScrollRequest as EventListener);
    return () => {
      window.removeEventListener(TRAVEL_CAROUSEL_SCROLL_EVENT, onScrollRequest as EventListener);
    };
  }, [scrollToSlideId]);

  return (
    <div className="w-full justify-center items-center">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} data-slide-id={slide.id}>
              <div className="relative aspect-[16/9] overflow-hidden cursor-grab flex">
                <Suspense fallback={<div className="absolute inset-0 z-5 flex items-center justify-center">Loading...</div>}>
                    <Image
                    src={`/gallery/travel/countryThumbs/${slide.name.toLowerCase()}.jpg`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover z-1"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                    loading="lazy"
                    quality={75}
                    />
                </Suspense>
                <div className="absolute z-2 inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                <div className="absolute z-3 inset-0 flex flex-col items-center justify-center p-8 text-center text-white pointer-events-none">
                  <h2 className="font-bebas font-bold text-[7.5rem] text-shadow-lg travel-title-Oride">{slide.name.toUpperCase()}</h2>
                  <p className="-translate-y-12 font-bitcount font-accent text-[2.25rem] text-shadow-lg travel-country-Oride">{slide.country}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious suppressHydrationWarning className="left-4" variant={"default"} size={"lg"} />
        <CarouselNext suppressHydrationWarning className="right-4" variant={"default"} size={"lg"} />
      </Carousel>
    </div>
  );
}
