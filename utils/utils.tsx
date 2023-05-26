import { FlightOffer } from "@/types/types";

export function getDuration(item: FlightOffer) {
  return item.itineraries[0].duration.substring(2)
}

export function getCarrierCode(item: FlightOffer) {
  return item.itineraries[0].segments[0].carrierCode
}

export function getFlightNumber(item: FlightOffer) {
  return item.itineraries[0].segments[0].number
}

export function getDepartureCode(item: FlightOffer) {
  return item.itineraries[0].segments[0].departure.iataCode
}

function getTime(timeString: string) {
  const [datePart, timePart] = timeString.split('T');
  const [hours, minutes] = timePart.split(':');
  
  return `${hours}:${minutes}`;
}

export function getDepartureTime(item: FlightOffer) {
  return getTime(item.itineraries[0].segments[0].departure.at)
}

