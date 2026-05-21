
import { MapLocations } from "./actions";
import TravelMainCarouselClient from "@/utils/travelMainCarouselClient";

function shuffleSlides<T>(slides: T[]) {
  const shuffled = [...slides];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

type CarouselComponentProps = {
  initialSlideId?: number;
};

export default async function CarouselComponent({ initialSlideId }: CarouselComponentProps) {
  const slides = shuffleSlides(await MapLocations());

  return (
    <TravelMainCarouselClient slides={slides} initialSlideId={initialSlideId} />
  );
}
