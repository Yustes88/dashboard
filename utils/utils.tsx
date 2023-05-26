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