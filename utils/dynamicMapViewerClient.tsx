"use client";

import React from "react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";
import { MapPin } from "lucide-react";
import { scrollTravelCarouselToSlide } from "@/utils/travelMainCarouselClient";

type Location = {
  id: number;
  name: string;
  lng: number;
  lat: number;
};

type Props = {
  locations: Location[];
};

export default function DynamicMapViewerClient({ locations }: Props) {
  return (
    <div className="h-full w-full p-0 overflow-hidden relative">
      <Map
        attributionControl={false}
        center={[2.25, 52.25]}
        zoom={2.5}
        fadeDuration={250}
        scrollZoom={false}
        dragPan={false}
        touchZoomRotate={false}
        doubleClickZoom={false}
        keyboard={false}
        interactive={false}
      >
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
            anchor="bottom"
            onClick={() => scrollTravelCarouselToSlide(location.id)}
          >
            <MarkerContent>
              <MapPin className="accent transition-transform hover:scale-110" size={27.5} />
            </MarkerContent>
            <MarkerTooltip>{location.name}</MarkerTooltip>
          </MapMarker>
        ))}
        <MapControls showZoom={false} showCompass={false} showFullscreen={false} />
      </Map>
      <div className="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded px-2 py-1 font-mono text-xs text-gray-300 backdrop-blur border border-solid border-gray-400/20 cursor-default">
        <span>
          <span className="text-muted-foreground">lat:</span> {" "}
          {(52.25).toFixed(2)}
        </span>
        <span>
          <span className="text-muted-foreground">lng:</span> {" "}
          {(4.25).toFixed(2)}
        </span>
      </div>
      <div className="bg-background/80 absolute bottom-2 right-2 z-10 flex flex-wrap gap-x-1 gap-y-1 rounded px-2 py-1 font-mono text-xs text-gray-300 backdrop-blur border border-solid border-gray-400/20 cursor-default">
        <span>
          <a href="https://carto.com/about-carto/" target="_blank" className="text-muted-foreground">©CARTO,</a>
        </span>
        <span>
          <a href="https://www.mapcn.dev/" target="_blank" className="text-muted-foreground">MAPCN</a>
        </span>
      </div>
    </div>
  );
}
