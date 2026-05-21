
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip, MapClusterLayer, useMap } from "@/components/ui/map";
import { MapPin } from "lucide-react";
import { MapLocations } from "./actions";

const locations = await MapLocations();

export default function MapViewer() {

    return (

        <div className="h-100 w-full p-0 overflow-hidden relative"> 
            <Map attributionControl={false} center={[4.25, 52.25]} zoom={2.5} fadeDuration={250} scrollZoom={false} dragPan={false} touchZoomRotate={false} doubleClickZoom={false} keyboard={false} interactive={false}>   
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
            <div className="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded px-2 py-1 font-mono text-xs backdrop-blur border border-solid border-gray-200/20"> 
                <span>
                    <span className="text-muted-foreground">lat:</span>{" "}
                    {(52.25).toFixed(2)}
                </span>
                <span>
                    <span className="text-muted-foreground">lng:</span>{" "}
                    {(4.25).toFixed(2)}
                </span>
            </div>
        </div>

    );
}
