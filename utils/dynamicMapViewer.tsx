
import DynamicMapViewerClient from "@/utils/dynamicMapViewerClient";
import { MapLocations } from "./actions";

const locations = await MapLocations();

export default function MapViewer() {
  return <DynamicMapViewerClient locations={locations} />;
}
