
'use client';

import { Map, MapControls, MapMarker, MapViewport, MarkerContent, MarkerTooltip, useMap } from "@/components/ui/map";
import { MapPin } from "lucide-react";
import { useState } from "react";

export default function mapViewer() {

    const [viewport, setViewport] = useState<MapViewport>({
        center: [7.5, 52.25],
        zoom: 2.5,
        bearing: 0,
        pitch: 0,
    });

    // let bounds = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])

    const locations = [
        {
            id: 1,
            name: "Stavanger, Norway",
            lng: 5.73,
            lat: 58.97, 
        },
        {
            id: 2,
            name: "Oslo, Norway",
            lng: 10.75,
            lat: 59.91, 
        },
    ];

    return (

        <div className="h-100 w-full p-0 overflow-hidden relative">
            <Map viewport={viewport} onViewportChange={setViewport} scrollZoom={false} dragPan={false} touchZoomRotate={false} doubleClickZoom={false} keyboard={false} interactive={false}>   
                {locations.map((location) => (
                    <MapMarker
                        key={location.id}
                        longitude={location.lng}
                        latitude={location.lat}
                        anchor="bottom"
                    >
                        <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
                        <MarkerContent>
                            <MapPin
                                className="accent transition-transform hover:scale-110"
                                size={27.5}
                            />
                        </MarkerContent>
                        <MarkerTooltip>{location.name}</MarkerTooltip>
                    </MapMarker>
                ))}
                <MapControls showZoom={false} showCompass={false} showFullscreen={false} />
            </Map>
            <div className="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded px-2 py-1 font-mono text-xs backdrop-blur border border-solid border-gray-200/50">
                <span>
                    <span className="text-muted-foreground">lat:</span>{" "}
                    {viewport.center[1].toFixed(2)}
                </span>
                <span>
                    <span className="text-muted-foreground">lng:</span>{" "}
                    {viewport.center[0].toFixed(2)}
                </span>
            </div>
        </div>

    );
}
