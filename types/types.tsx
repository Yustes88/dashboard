export type FlightSearchTypes = {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: FlightOffer[];
  dictionaries: Dictionaries;
};

export type FlightOffer = {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: Itinerary[];
  price: Price;
  pricingOptions: PricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TravelerPricing[];
};

export type Itinerary = {
  duration: string;
  segments: Segment[];
};

export type Segment = {
  departure: {
    iataCode: string;
    terminal?: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    terminal?: string;
    at: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  stops?: {
    iataCode: string;
    duration: string;
    arrivalAt: string;
    departureAt: string;
  }[];
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
};

export type Price = {
  currency: string;
  total: string;
  base: string;
  fees: {
    amount: string;
    type: string;
  }[];
  grandTotal: string;
};

export type PricingOptions = {
  fareType: string[];
  includedCheckedBagsOnly: boolean;
};

export type TravelerPricing = {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: {
    currency: string;
    total: string;
    base: string;
  };
  fareDetailsBySegment: FareDetailsBySegmentWeight[] | FareDetailsBySegmentQuantity[];
};

export type FareDetailsBySegmentWeight = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare?: string;
  class: string;
  includedCheckedBags: {
    weight: number;
    weightUnit: string;
  };
};

export type FareDetailsBySegmentQuantity = {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare?: string;
  class: string;
  includedCheckedBags: {
    quantity: number;
  };
};

export type Dictionaries = {
  locations: {
    [code: string]: {
      cityCode: string;
      countryCode: string;
    };
  };
  aircraft: {
    [code: string]: string;
  };
  currencies: {
    [code: string]: string;
  };
  carriers: {
    [code: string]: string;
  };
};







