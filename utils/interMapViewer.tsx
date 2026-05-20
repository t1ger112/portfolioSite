
'use client';

import { Map, MapControls, MapViewport } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

export default function mapViewer() {

    const [viewport, setViewport] = useState<MapViewport>({
        center: [10, 50],
        zoom: 3,
        bearing: 0,
        pitch: 0,
    });

    return (

        <div className="flex size-full items-center justify-center bg-background">

            <Card className="h-100 w-full p-0 overflow-hidden relative">
                <Map viewport={viewport} onViewportChange={setViewport} scrollZoom={false} projection={{ type: "globe" }}>
                    <MapControls showCompass showZoom />
                </Map>
                <div className="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded border px-2 py-1.5 font-mono text-xs backdrop-blur">
                    <span>
                        <span className="text-muted-foreground">lng:</span>{" "}
                        {viewport.center[0].toFixed(3)}
                    </span>
                    <span>
                        <span className="text-muted-foreground">lat:</span>{" "}
                        {viewport.center[1].toFixed(3)}
                    </span>
                    <span>
                        <span className="text-muted-foreground">zoom:</span>{" "}
                        {viewport.zoom.toFixed(1)}
                    </span>
                    <span>
                        <span className="text-muted-foreground">bearing:</span>{" "}
                        {viewport.bearing.toFixed(1)}°
                    </span>
                    <span>
                        <span className="text-muted-foreground">pitch:</span>{" "}
                        {viewport.pitch.toFixed(1)}°
                    </span>
                </div>
            </Card>


        </div>
    );
}
