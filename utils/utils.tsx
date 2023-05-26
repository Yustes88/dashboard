import { FlightOffer } from "@/types/types";

export function getDuration(item: FlightOffer) {
  return item.itineraries[0].duration.substring(2)
}