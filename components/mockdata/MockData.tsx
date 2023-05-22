import { FlightSearchTypes } from "@/types/types";

export const MockData: FlightSearchTypes = {
  "meta": {
    "count": 77,
    "links": {
      "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-05-30&adults=1&nonStop=false&max=250"
    }
  },
  "data": [
    {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT24H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:35:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-30T18:55:00"
              },
              "carrierCode": "TR",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H20M",
              "id": "49",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T08:20:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T09:50:00"
              },
              "carrierCode": "TR",
              "number": "624",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "50",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "307.00",
        "base": "205.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "307.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "307.00",
            "base": "205.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "49",
              "cabin": "ECONOMY",
              "fareBasis": "O2TR24",
              "class": "O",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "50",
              "cabin": "ECONOMY",
              "fareBasis": "W2TR24",
              "class": "W",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "2",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T20:45:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T03:10:00"
              },
              "carrierCode": "TR",
              "number": "13",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H25M",
              "id": "17",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T08:20:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T09:50:00"
              },
              "carrierCode": "TR",
              "number": "624",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "18",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "323.00",
        "base": "221.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "323.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "323.00",
            "base": "221.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "17",
              "cabin": "ECONOMY",
              "fareBasis": "W2TR24",
              "class": "W",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "18",
              "cabin": "ECONOMY",
              "fareBasis": "W2TR24",
              "class": "W",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "3",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT22H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:35:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-30T18:55:00"
              },
              "carrierCode": "TR",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H20M",
              "id": "140",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T07:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T08:30:00"
              },
              "carrierCode": "TR",
              "number": "608",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "141",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "333.00",
        "base": "231.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "333.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "333.00",
            "base": "231.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "140",
              "cabin": "ECONOMY",
              "fareBasis": "O2TR24",
              "class": "O",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "141",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "4",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT31H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:35:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-30T18:55:00"
              },
              "carrierCode": "TR",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H20M",
              "id": "150",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T16:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T17:30:00"
              },
              "carrierCode": "TR",
              "number": "610",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "151",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "333.00",
        "base": "231.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "333.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "333.00",
            "base": "231.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "150",
              "cabin": "ECONOMY",
              "fareBasis": "O2TR24",
              "class": "O",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "151",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "5",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT33H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:35:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-30T18:55:00"
              },
              "carrierCode": "TR",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H20M",
              "id": "76",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T17:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T19:00:00"
              },
              "carrierCode": "TR",
              "number": "616",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "77",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "333.00",
        "base": "231.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "333.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "333.00",
            "base": "231.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "76",
              "cabin": "ECONOMY",
              "fareBasis": "O2TR24",
              "class": "O",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "77",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "6",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "0",
                "at": "2023-05-30T06:55:00"
              },
              "arrival": {
                "iataCode": "DPS",
                "terminal": "D",
                "at": "2023-05-30T10:20:00"
              },
              "carrierCode": "ID",
              "number": "6006",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "ID"
              },
              "duration": "PT6H25M",
              "id": "60",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DPS",
                "terminal": "D",
                "at": "2023-05-30T14:00:00"
              },
              "arrival": {
                "iataCode": "DMK",
                "terminal": "0",
                "at": "2023-05-30T17:15:00"
              },
              "carrierCode": "ID",
              "number": "7637",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "ID"
              },
              "duration": "PT4H15M",
              "id": "61",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "346.15",
        "base": "222.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "346.15"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "GP"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "346.15",
            "base": "222.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "60",
              "cabin": "ECONOMY",
              "fareBasis": "XOWAU",
              "class": "X",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "61",
              "cabin": "ECONOMY",
              "fareBasis": "XIDOW",
              "class": "X",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "7",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T11:35:00"
              },
              "arrival": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-30T16:50:00"
              },
              "carrierCode": "PR",
              "number": "212",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT8H15M",
              "id": "41",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-30T19:20:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T21:50:00"
              },
              "carrierCode": "PR",
              "number": "732",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT3H30M",
              "id": "42",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "349.67",
        "base": "240.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "349.67"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "PR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "349.67",
            "base": "240.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "41",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "42",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "8",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT28H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T11:35:00"
              },
              "arrival": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-30T16:50:00"
              },
              "carrierCode": "PR",
              "number": "212",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT8H15M",
              "id": "88",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-31T09:45:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T12:05:00"
              },
              "carrierCode": "PR",
              "number": "730",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT3H20M",
              "id": "89",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "349.67",
        "base": "240.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "349.67"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "PR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "349.67",
            "base": "240.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "88",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "89",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "9",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT33H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T11:35:00"
              },
              "arrival": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-30T16:50:00"
              },
              "carrierCode": "PR",
              "number": "212",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT8H15M",
              "id": "37",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MNL",
                "terminal": "2",
                "at": "2023-05-31T14:25:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T16:45:00"
              },
              "carrierCode": "PR",
              "number": "736",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "PR"
              },
              "duration": "PT3H20M",
              "id": "38",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "349.67",
        "base": "240.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "349.67"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "PR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "349.67",
            "base": "240.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "37",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "38",
              "cabin": "ECONOMY",
              "fareBasis": "EOBAU",
              "class": "E",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "10",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT28H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:35:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-30T18:55:00"
              },
              "carrierCode": "TR",
              "number": "3",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H20M",
              "id": "112",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T12:40:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:15:00"
              },
              "carrierCode": "TR",
              "number": "604",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H35M",
              "id": "113",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "373.00",
        "base": "271.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "373.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "373.00",
            "base": "271.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "112",
              "cabin": "ECONOMY",
              "fareBasis": "O2TR24",
              "class": "O",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "113",
              "cabin": "ECONOMY",
              "fareBasis": "Y2TR24",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "11",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT13H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:35:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T15:00:00"
              },
              "carrierCode": "CX",
              "number": "110",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H25M",
              "id": "68",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T15:55:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T18:00:00"
              },
              "carrierCode": "CX",
              "number": "701",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H5M",
              "id": "69",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "68",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "69",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "12",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT13H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T17:35:00"
              },
              "carrierCode": "CX",
              "number": "162",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H30M",
              "id": "80",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T18:35:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T20:35:00"
              },
              "carrierCode": "CX",
              "number": "703",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "81",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "80",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "81",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "13",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT15H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "13",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T08:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:00:00"
              },
              "carrierCode": "CX",
              "number": "705",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "14",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "13",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "14",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "14",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:35:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T15:00:00"
              },
              "carrierCode": "CX",
              "number": "110",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H25M",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T18:35:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T20:35:00"
              },
              "carrierCode": "CX",
              "number": "703",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "15",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "3",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:55:00"
              },
              "carrierCode": "CX",
              "number": "717",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT2H55M",
              "id": "4",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "3",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "4",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "16",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "92",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T11:30:00"
              },
              "carrierCode": "CX",
              "number": "755",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "93",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "92",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "93",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "17",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T17:35:00"
              },
              "carrierCode": "CX",
              "number": "162",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H30M",
              "id": "116",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T23:50:00"
              },
              "carrierCode": "CX",
              "number": "617",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "117",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "116",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "117",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "18",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "19",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T12:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:00:00"
              },
              "carrierCode": "CX",
              "number": "653",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "20",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "19",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "20",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "19",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:35:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T15:00:00"
              },
              "carrierCode": "CX",
              "number": "110",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H25M",
              "id": "45",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T23:50:00"
              },
              "carrierCode": "CX",
              "number": "617",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "46",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "45",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "46",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "20",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT21H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "96",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T14:25:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T16:30:00"
              },
              "carrierCode": "CX",
              "number": "751",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H5M",
              "id": "97",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "96",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "97",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "21",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT23H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "21",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T15:55:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T18:00:00"
              },
              "carrierCode": "CX",
              "number": "701",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H5M",
              "id": "22",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "21",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "22",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "22",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT25H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "110",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T18:35:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T20:35:00"
              },
              "carrierCode": "CX",
              "number": "703",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "111",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "110",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "111",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "23",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT28H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:55:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T05:10:00"
              },
              "carrierCode": "CX",
              "number": "138",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "148",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T21:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T23:50:00"
              },
              "carrierCode": "CX",
              "number": "617",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "149",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "377.54",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "377.54"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "377.54",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "148",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "149",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "24",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT12H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "2",
                "at": "2023-05-30T09:45:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "4",
                "at": "2023-05-30T11:25:00"
              },
              "carrierCode": "JQ",
              "number": "509",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT1H40M",
              "id": "134",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "JQ",
              "number": "29",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "135",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "380.24",
        "base": "279.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "380.24"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "HR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "380.24",
            "base": "279.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "134",
              "cabin": "ECONOMY",
              "fareBasis": "CLOW",
              "class": "C",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "135",
              "cabin": "ECONOMY",
              "fareBasis": "HLOW2",
              "class": "H",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "25",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "2",
                "at": "2023-05-30T08:15:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "4",
                "at": "2023-05-30T09:55:00"
              },
              "carrierCode": "JQ",
              "number": "507",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT1H40M",
              "id": "70",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "JQ",
              "number": "29",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "71",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "380.24",
        "base": "279.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "380.24"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "HR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "380.24",
            "base": "279.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "70",
              "cabin": "ECONOMY",
              "fareBasis": "CLOW",
              "class": "C",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "71",
              "cabin": "ECONOMY",
              "fareBasis": "HLOW2",
              "class": "H",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "26",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT15H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "2",
                "at": "2023-05-30T07:00:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "4",
                "at": "2023-05-30T08:40:00"
              },
              "carrierCode": "JQ",
              "number": "505",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT1H40M",
              "id": "104",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "JQ",
              "number": "29",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "105",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "380.24",
        "base": "279.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "380.24"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "HR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "380.24",
            "base": "279.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "104",
              "cabin": "ECONOMY",
              "fareBasis": "CLOW",
              "class": "C",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "105",
              "cabin": "ECONOMY",
              "fareBasis": "HLOW2",
              "class": "H",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "27",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT16H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "2",
                "at": "2023-05-30T06:00:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "4",
                "at": "2023-05-30T07:40:00"
              },
              "carrierCode": "JQ",
              "number": "501",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT1H40M",
              "id": "106",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "JQ",
              "number": "29",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "107",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "380.24",
        "base": "279.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "380.24"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "HR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "380.24",
            "base": "279.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "106",
              "cabin": "ECONOMY",
              "fareBasis": "CLOW",
              "class": "C",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "107",
              "cabin": "ECONOMY",
              "fareBasis": "HLOW2",
              "class": "H",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "28",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT22H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T14:15:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:30:00"
              },
              "carrierCode": "CX",
              "number": "100",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "118",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T08:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:00:00"
              },
              "carrierCode": "CX",
              "number": "705",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "119",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "118",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "119",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "29",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT23H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T14:15:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:30:00"
              },
              "carrierCode": "CX",
              "number": "100",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "108",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:55:00"
              },
              "carrierCode": "CX",
              "number": "717",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT2H55M",
              "id": "109",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "108",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "109",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "30",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT24H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T14:15:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:30:00"
              },
              "carrierCode": "CX",
              "number": "100",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "51",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T11:30:00"
              },
              "carrierCode": "CX",
              "number": "755",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "52",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "51",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "52",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "31",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT26H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T14:15:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:30:00"
              },
              "carrierCode": "CX",
              "number": "100",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "124",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T12:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:00:00"
              },
              "carrierCode": "CX",
              "number": "653",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "125",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "124",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "125",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "32",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT26H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T17:35:00"
              },
              "carrierCode": "CX",
              "number": "162",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H30M",
              "id": "142",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T08:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:00:00"
              },
              "carrierCode": "CX",
              "number": "705",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "143",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "142",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "143",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "33",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT27H50M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T17:35:00"
              },
              "carrierCode": "CX",
              "number": "162",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H30M",
              "id": "132",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:55:00"
              },
              "carrierCode": "CX",
              "number": "717",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT2H55M",
              "id": "133",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "132",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "133",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "34",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT28H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T17:35:00"
              },
              "carrierCode": "CX",
              "number": "162",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H30M",
              "id": "74",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T09:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T11:30:00"
              },
              "carrierCode": "CX",
              "number": "755",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H",
              "id": "75",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "74",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "75",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "35",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT29H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T14:15:00"
              },
              "arrival": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-30T21:30:00"
              },
              "carrierCode": "CX",
              "number": "100",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT9H15M",
              "id": "55",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HKG",
                "terminal": "1",
                "at": "2023-05-31T14:25:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T16:30:00"
              },
              "carrierCode": "CX",
              "number": "751",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CX"
              },
              "duration": "PT3H5M",
              "id": "56",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "391.55",
        "base": "173.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "391.55"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CX"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "391.55",
            "base": "173.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "55",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "56",
              "cabin": "ECONOMY",
              "fareBasis": "SR21AUIO",
              "brandedFare": "ECONLIGHT",
              "class": "S",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "36",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT25H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T20:45:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T03:10:00"
              },
              "carrierCode": "TR",
              "number": "13",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H25M",
              "id": "53",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T17:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T19:00:00"
              },
              "carrierCode": "TR",
              "number": "616",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "54",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "392.00",
        "base": "290.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "392.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "392.00",
            "base": "290.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "53",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "D0TR24",
              "class": "D",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "54",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "D0TR24",
              "class": "D",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "37",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT9H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T10:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T16:20:00"
              },
              "carrierCode": "TG",
              "number": "476",
              "aircraft": {
                "code": "77W"
              },
              "operating": {
                "carrierCode": "TG"
              },
              "duration": "PT9H20M",
              "id": "57",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "403.70",
        "base": "337.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "403.70"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "TG"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "403.70",
            "base": "337.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "57",
              "cabin": "ECONOMY",
              "fareBasis": "VOWOFX",
              "class": "V",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "38",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T20:45:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T03:10:00"
              },
              "carrierCode": "TR",
              "number": "13",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H25M",
              "id": "114",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T07:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T08:30:00"
              },
              "carrierCode": "TR",
              "number": "608",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "115",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "405.00",
        "base": "303.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "405.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "405.00",
            "base": "303.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "114",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "115",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "39",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT23H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T20:45:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T03:10:00"
              },
              "carrierCode": "TR",
              "number": "13",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H25M",
              "id": "120",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T16:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T17:30:00"
              },
              "carrierCode": "TR",
              "number": "610",
              "aircraft": {
                "code": "32Q"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H30M",
              "id": "121",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "405.00",
        "base": "303.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "405.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "405.00",
            "base": "303.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "120",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "121",
              "cabin": "ECONOMY",
              "fareBasis": "M2TR24",
              "class": "M",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "40",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 7,
      "itineraries": [
        {
          "duration": "PT13H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "0",
                "at": "2023-05-30T06:55:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "M",
                "at": "2023-05-30T14:45:00"
              },
              "carrierCode": "OD",
              "number": "172",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "OD"
              },
              "duration": "PT9H50M",
              "stops": [
                {
                  "iataCode": "DPS",
                  "duration": "PT1H",
                  "arrivalAt": "2023-05-30T10:35:00",
                  "departureAt": "2023-05-30T11:35:00"
                }
              ],
              "id": "39",
              "numberOfStops": 1,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "M",
                "at": "2023-05-30T16:00:00"
              },
              "arrival": {
                "iataCode": "DMK",
                "terminal": "0",
                "at": "2023-05-30T17:10:00"
              },
              "carrierCode": "OD",
              "number": "522",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "OD"
              },
              "duration": "PT2H10M",
              "id": "40",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "424.08",
        "base": "261.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "424.08"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "GP"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "424.08",
            "base": "261.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "39",
              "cabin": "ECONOMY",
              "fareBasis": "TOWAU",
              "class": "T",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "40",
              "cabin": "ECONOMY",
              "fareBasis": "XOWMY",
              "class": "X",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "41",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 7,
      "itineraries": [
        {
          "duration": "PT31H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "0",
                "at": "2023-05-30T06:55:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "M",
                "at": "2023-05-30T14:45:00"
              },
              "carrierCode": "OD",
              "number": "172",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "OD"
              },
              "duration": "PT9H50M",
              "stops": [
                {
                  "iataCode": "DPS",
                  "duration": "PT1H",
                  "arrivalAt": "2023-05-30T10:35:00",
                  "departureAt": "2023-05-30T11:35:00"
                }
              ],
              "id": "35",
              "numberOfStops": 1,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "M",
                "at": "2023-05-31T09:55:00"
              },
              "arrival": {
                "iataCode": "DMK",
                "terminal": "0",
                "at": "2023-05-31T11:05:00"
              },
              "carrierCode": "OD",
              "number": "520",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "OD"
              },
              "duration": "PT2H10M",
              "id": "36",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "433.12",
        "base": "261.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "433.12"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "GP"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "433.12",
            "base": "261.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "35",
              "cabin": "ECONOMY",
              "fareBasis": "TOWAU",
              "class": "T",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "36",
              "cabin": "ECONOMY",
              "fareBasis": "XOWMY",
              "class": "X",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "42",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT18H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "43",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T12:10:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T13:25:00"
              },
              "carrierCode": "MH",
              "number": "788",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H15M",
              "id": "44",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "451.27",
        "base": "380.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "451.27"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "451.27",
            "base": "380.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "43",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "44",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "43",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT21H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "29",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T15:05:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T16:20:00"
              },
              "carrierCode": "MH",
              "number": "782",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H15M",
              "id": "30",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "451.27",
        "base": "380.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "451.27"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "451.27",
            "base": "380.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "29",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "30",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "44",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT22H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "33",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T16:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T17:20:00"
              },
              "carrierCode": "MH",
              "number": "774",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H20M",
              "id": "34",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "451.27",
        "base": "380.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "451.27"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "451.27",
            "base": "380.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "33",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "34",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "45",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-23",
      "lastTicketingDateTime": "2023-05-23",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT20H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T20:45:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T03:10:00"
              },
              "carrierCode": "TR",
              "number": "13",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT8H25M",
              "id": "84",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "1",
                "at": "2023-05-31T12:40:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:15:00"
              },
              "carrierCode": "TR",
              "number": "604",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "TR"
              },
              "duration": "PT2H35M",
              "id": "85",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "456.00",
        "base": "354.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "456.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "456.00",
            "base": "354.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "84",
              "cabin": "ECONOMY",
              "fareBasis": "W2TR24",
              "class": "W",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "85",
              "cabin": "ECONOMY",
              "fareBasis": "Y2TR24",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "46",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT23H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "122",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T17:45:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T18:55:00"
              },
              "carrierCode": "MH",
              "number": "780",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H10M",
              "id": "123",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "460.31",
        "base": "380.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "460.31"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "460.31",
            "base": "380.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "122",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "123",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "47",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT27H",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T13:25:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-30T20:15:00"
              },
              "carrierCode": "MH",
              "number": "122",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "9",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T12:10:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T13:25:00"
              },
              "carrierCode": "MH",
              "number": "788",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H15M",
              "id": "10",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "460.31",
        "base": "380.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "460.31"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "460.31",
            "base": "380.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "9",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "10",
              "cabin": "ECONOMY",
              "fareBasis": "QBXOWAU",
              "brandedFare": "BASIC",
              "class": "Q",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "48",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 1,
      "itineraries": [
        {
          "duration": "PT15H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "15",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T09:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:15:00"
              },
              "carrierCode": "MH",
              "number": "784",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H15M",
              "id": "16",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "488.27",
        "base": "417.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "488.27"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "488.27",
            "base": "417.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "15",
              "cabin": "ECONOMY",
              "fareBasis": "NBXOWAU",
              "brandedFare": "BASIC",
              "class": "N",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "16",
              "cabin": "ECONOMY",
              "fareBasis": "NBXOWAU",
              "brandedFare": "BASIC",
              "class": "N",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "49",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 1,
      "itineraries": [
        {
          "duration": "PT23H50M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T13:25:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-30T20:15:00"
              },
              "carrierCode": "MH",
              "number": "122",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "130",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T09:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T10:15:00"
              },
              "carrierCode": "MH",
              "number": "784",
              "aircraft": {
                "code": "738"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT2H15M",
              "id": "131",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "497.31",
        "base": "417.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "497.31"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "497.31",
            "base": "417.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "130",
              "cabin": "ECONOMY",
              "fareBasis": "NBXOWAU",
              "brandedFare": "BASIC",
              "class": "N",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "131",
              "cabin": "ECONOMY",
              "fareBasis": "NBXOWAU",
              "brandedFare": "BASIC",
              "class": "N",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "50",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "62",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T13:20:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:30:00"
              },
              "carrierCode": "MH",
              "number": "5860",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "TG"
              },
              "duration": "PT2H10M",
              "id": "63",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "526.27",
        "base": "455.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "526.27"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "526.27",
            "base": "455.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "62",
              "cabin": "ECONOMY",
              "fareBasis": "SBXOWAU",
              "brandedFare": "BASIC",
              "class": "S",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "63",
              "cabin": "ECONOMY",
              "fareBasis": "SBXOWAU",
              "brandedFare": "BASIC",
              "class": "S",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "51",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT26H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T05:00:00"
              },
              "carrierCode": "MH",
              "number": "140",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "MH"
              },
              "duration": "PT8H50M",
              "id": "144",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "KUL",
                "terminal": "1",
                "at": "2023-05-31T20:55:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T22:05:00"
              },
              "carrierCode": "MH",
              "number": "5862",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "TG"
              },
              "duration": "PT2H10M",
              "id": "145",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "535.31",
        "base": "455.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "535.31"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "MH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "535.31",
            "base": "455.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "144",
              "cabin": "ECONOMY",
              "fareBasis": "SBXOWAU",
              "brandedFare": "BASIC",
              "class": "S",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "145",
              "cabin": "ECONOMY",
              "fareBasis": "SBXOWAU",
              "brandedFare": "BASIC",
              "class": "S",
              "includedCheckedBags": {
                "weight": 20,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "52",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-24",
      "lastTicketingDateTime": "2023-05-24",
      "numberOfBookableSeats": 4,
      "itineraries": [
        {
          "duration": "PT9H50M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T09:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T16:40:00"
              },
              "carrierCode": "EK",
              "number": "5023",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT9H50M",
              "id": "126",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "551.09",
        "base": "493.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "551.09"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "EK"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "551.09",
            "base": "493.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "126",
              "cabin": "ECONOMY",
              "fareBasis": "KLSOSAU1",
              "brandedFare": "ECOFLEX",
              "class": "K",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "53",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-24",
      "lastTicketingDateTime": "2023-05-24",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT9H50M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T09:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T16:40:00"
              },
              "carrierCode": "QF",
              "number": "23",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT9H50M",
              "id": "127",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "562.09",
        "base": "493.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "562.09"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "562.09",
            "base": "493.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "127",
              "cabin": "ECONOMY",
              "fareBasis": "SLATDO",
              "class": "S",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "54",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:50:00"
              },
              "arrival": {
                "iataCode": "ICN",
                "terminal": "2",
                "at": "2023-05-30T17:45:00"
              },
              "carrierCode": "KE",
              "number": "402",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "KE"
              },
              "duration": "PT10H55M",
              "id": "7",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "ICN",
                "terminal": "2",
                "at": "2023-05-30T19:45:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T23:50:00"
              },
              "carrierCode": "KE",
              "number": "659",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "KE"
              },
              "duration": "PT6H5M",
              "id": "8",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "793.49",
        "base": "720.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "793.49"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "KE"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "793.49",
            "base": "720.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "7",
              "cabin": "ECONOMY",
              "fareBasis": "ELE00RZS",
              "class": "E",
              "includedCheckedBags": {
                "quantity": 1
              }
            },
            {
              "segmentId": "8",
              "cabin": "ECONOMY",
              "fareBasis": "ELE00RZS",
              "class": "E",
              "includedCheckedBags": {
                "quantity": 1
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "55",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "TPE",
                "terminal": "2",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "CI",
              "number": "52",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT9H30M",
              "id": "90",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "TPE",
                "terminal": "1",
                "at": "2023-05-31T07:10:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T09:45:00"
              },
              "carrierCode": "CI",
              "number": "833",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT3H35M",
              "id": "91",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "919.12",
        "base": "781.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "919.12"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "919.12",
            "base": "781.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "90",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "91",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "56",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT17H",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "TPE",
                "terminal": "2",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "CI",
              "number": "52",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT9H30M",
              "id": "5",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "TPE",
                "terminal": "1",
                "at": "2023-05-31T09:25:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T12:10:00"
              },
              "carrierCode": "CI",
              "number": "831",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT3H45M",
              "id": "6",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "919.12",
        "base": "781.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "919.12"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "919.12",
            "base": "781.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "5",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "6",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "57",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT21H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T22:10:00"
              },
              "arrival": {
                "iataCode": "TPE",
                "terminal": "2",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "CI",
              "number": "52",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT9H30M",
              "id": "31",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "TPE",
                "terminal": "1",
                "at": "2023-05-31T13:35:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T16:20:00"
              },
              "carrierCode": "CI",
              "number": "835",
              "aircraft": {
                "code": "333"
              },
              "operating": {
                "carrierCode": "CI"
              },
              "duration": "PT3H45M",
              "id": "32",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "919.12",
        "base": "781.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "919.12"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "CI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "919.12",
            "base": "781.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "31",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "32",
              "cabin": "ECONOMY",
              "fareBasis": "BLOAU",
              "class": "B",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "58",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT13H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T09:00:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T11:45:00"
              },
              "carrierCode": "QF",
              "number": "411",
              "aircraft": {
                "code": "388"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT2H45M",
              "stops": [
                {
                  "iataCode": "BNE",
                  "duration": "PT30M",
                  "arrivalAt": "2023-05-30T10:00:00",
                  "departureAt": "2023-05-30T10:30:00"
                }
              ],
              "id": "100",
              "numberOfStops": 1,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "101",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1413.14",
        "base": "1324.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1413.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1413.14",
            "base": "1324.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "100",
              "cabin": "ECONOMY",
              "fareBasis": "KIQW",
              "class": "K",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "101",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "59",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T08:30:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T10:05:00"
              },
              "carrierCode": "QF",
              "number": "423",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "27",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "28",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1413.14",
        "base": "1324.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1413.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1413.14",
            "base": "1324.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "27",
              "cabin": "ECONOMY",
              "fareBasis": "KIQW",
              "class": "K",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "28",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "60",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 5,
      "itineraries": [
        {
          "duration": "PT12H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T10:20:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T11:55:00"
              },
              "carrierCode": "QF",
              "number": "433",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "58",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "59",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1529.14",
        "base": "1440.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1529.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1529.14",
            "base": "1440.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "58",
              "cabin": "ECONOMY",
              "fareBasis": "BIQW",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "59",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "61",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 5,
      "itineraries": [
        {
          "duration": "PT13H10M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T09:30:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T11:05:00"
              },
              "carrierCode": "QF",
              "number": "431",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "25",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "26",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1529.14",
        "base": "1440.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1529.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1529.14",
            "base": "1440.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "25",
              "cabin": "ECONOMY",
              "fareBasis": "BIQW",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "26",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "62",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 5,
      "itineraries": [
        {
          "duration": "PT13H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T09:00:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T10:35:00"
              },
              "carrierCode": "QF",
              "number": "427",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "102",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "103",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1529.14",
        "base": "1440.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1529.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1529.14",
            "base": "1440.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "102",
              "cabin": "ECONOMY",
              "fareBasis": "BIQW",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "103",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "63",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 5,
      "itineraries": [
        {
          "duration": "PT13H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T08:45:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T10:20:00"
              },
              "carrierCode": "QF",
              "number": "425",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "136",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "137",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1529.14",
        "base": "1440.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1529.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1529.14",
            "base": "1440.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "136",
              "cabin": "ECONOMY",
              "fareBasis": "BIQW",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "137",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "64",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-25",
      "lastTicketingDateTime": "2023-05-25",
      "numberOfBookableSeats": 5,
      "itineraries": [
        {
          "duration": "PT14H25M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "3",
                "at": "2023-05-30T08:15:00"
              },
              "arrival": {
                "iataCode": "MEL",
                "terminal": "1",
                "at": "2023-05-30T09:50:00"
              },
              "carrierCode": "QF",
              "number": "421",
              "aircraft": {
                "code": "73H"
              },
              "operating": {
                "carrierCode": "QF"
              },
              "duration": "PT1H35M",
              "id": "72",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "MEL",
                "terminal": "2",
                "at": "2023-05-30T13:15:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:40:00"
              },
              "carrierCode": "QF",
              "number": "5559",
              "aircraft": {
                "code": "788"
              },
              "operating": {
                "carrierCode": "JQ"
              },
              "duration": "PT9H25M",
              "id": "73",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "1529.14",
        "base": "1440.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "1529.14"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "QF"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "1529.14",
            "base": "1440.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "72",
              "cabin": "ECONOMY",
              "fareBasis": "BIQW",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "73",
              "cabin": "ECONOMY",
              "fareBasis": "BLATDO",
              "class": "B",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "65",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT12H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:55:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-30T14:15:00"
              },
              "carrierCode": "SQ",
              "number": "212",
              "aircraft": {
                "code": "77W"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H20M",
              "id": "78",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-30T16:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T17:25:00"
              },
              "carrierCode": "SQ",
              "number": "712",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H25M",
              "id": "79",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "78",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "79",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "66",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT14H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T07:55:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-30T14:15:00"
              },
              "carrierCode": "SQ",
              "number": "212",
              "aircraft": {
                "code": "77W"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H20M",
              "id": "11",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-30T17:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-30T19:00:00"
              },
              "carrierCode": "SQ",
              "number": "714",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H30M",
              "id": "12",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "11",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "12",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "67",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT17H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T18:05:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-31T00:20:00"
              },
              "carrierCode": "SQ",
              "number": "242",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H15M",
              "id": "82",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-31T07:10:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T08:35:00"
              },
              "carrierCode": "SQ",
              "number": "706",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H25M",
              "id": "83",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "82",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "83",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "68",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T18:05:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-31T00:20:00"
              },
              "carrierCode": "SQ",
              "number": "242",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H15M",
              "id": "138",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-31T09:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T11:00:00"
              },
              "carrierCode": "SQ",
              "number": "708",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H30M",
              "id": "139",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "138",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "139",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "69",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT23H15M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T18:05:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-31T00:20:00"
              },
              "carrierCode": "SQ",
              "number": "242",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H15M",
              "id": "47",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-31T12:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T14:20:00"
              },
              "carrierCode": "SQ",
              "number": "710",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H30M",
              "id": "48",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "47",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "48",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "70",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT26H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T18:05:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-31T00:20:00"
              },
              "carrierCode": "SQ",
              "number": "242",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H15M",
              "id": "64",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-31T16:00:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T17:25:00"
              },
              "carrierCode": "SQ",
              "number": "712",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H25M",
              "id": "65",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "64",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "65",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "71",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-30",
      "lastTicketingDateTime": "2023-05-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT27H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T18:05:00"
              },
              "arrival": {
                "iataCode": "SIN",
                "terminal": "0",
                "at": "2023-05-31T00:20:00"
              },
              "carrierCode": "SQ",
              "number": "242",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT8H15M",
              "id": "146",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "SIN",
                "terminal": "2",
                "at": "2023-05-31T17:30:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T19:00:00"
              },
              "carrierCode": "SQ",
              "number": "714",
              "aircraft": {
                "code": "787"
              },
              "operating": {
                "carrierCode": "SQ"
              },
              "duration": "PT2H30M",
              "id": "147",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "2287.01",
        "base": "2209.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "2287.01"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "SQ"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "2287.01",
            "base": "2209.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "146",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            },
            {
              "segmentId": "147",
              "cabin": "ECONOMY",
              "fareBasis": "YIFSQ",
              "class": "Y",
              "includedCheckedBags": {
                "weight": 30,
                "weightUnit": "KG"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "72",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT19H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-30T20:30:00"
              },
              "carrierCode": "NH",
              "number": "890",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H30M",
              "id": "94",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HND",
                "at": "2023-05-31T00:05:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T04:35:00"
              },
              "carrierCode": "NH",
              "number": "849",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT6H30M",
              "id": "95",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6115.88",
        "base": "5683.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6115.88"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6115.88",
            "base": "5683.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "94",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "95",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "73",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT34H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "NH",
              "number": "880",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H40M",
              "id": "98",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HND",
                "at": "2023-06-01T00:05:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-06-01T04:35:00"
              },
              "carrierCode": "NH",
              "number": "849",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT6H30M",
              "id": "99",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6115.88",
        "base": "5683.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6115.88"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6115.88",
            "base": "5683.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "98",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "99",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "74",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT29H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "NH",
              "number": "880",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H40M",
              "id": "66",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "NRT",
                "terminal": "1",
                "at": "2023-05-31T18:35:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T23:20:00"
              },
              "carrierCode": "NH",
              "number": "805",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT6H45M",
              "id": "67",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6123.98",
        "base": "5683.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6123.98"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6123.98",
            "base": "5683.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "66",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "67",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "75",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT30H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "NH",
              "number": "880",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H40M",
              "id": "23",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "NRT",
                "terminal": "1",
                "at": "2023-05-31T18:40:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-06-01T00:05:00"
              },
              "carrierCode": "NH",
              "number": "803",
              "aircraft": {
                "code": "388"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT7H25M",
              "id": "24",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6123.98",
        "base": "5683.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6123.98"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6123.98",
            "base": "5683.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "23",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "24",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "76",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 4,
      "itineraries": [
        {
          "duration": "PT19H50M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T12:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-30T20:30:00"
              },
              "carrierCode": "NH",
              "number": "890",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H30M",
              "id": "128",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HND",
                "terminal": "3",
                "at": "2023-05-31T00:20:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T04:50:00"
              },
              "carrierCode": "NH",
              "number": "5965",
              "aircraft": {
                "code": "359"
              },
              "operating": {
                "carrierCode": "TG"
              },
              "duration": "PT6H30M",
              "id": "129",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6167.88",
        "base": "5735.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6167.88"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6167.88",
            "base": "5735.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "128",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "129",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    },
    {
      "type": "flight-offer",
      "id": "77",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "lastTicketingDate": "2023-05-29",
      "lastTicketingDateTime": "2023-05-29",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT21H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "SYD",
                "terminal": "1",
                "at": "2023-05-30T21:00:00"
              },
              "arrival": {
                "iataCode": "HND",
                "at": "2023-05-31T05:40:00"
              },
              "carrierCode": "NH",
              "number": "880",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT9H40M",
              "id": "86",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "HND",
                "at": "2023-05-31T10:50:00"
              },
              "arrival": {
                "iataCode": "BKK",
                "at": "2023-05-31T15:30:00"
              },
              "carrierCode": "NH",
              "number": "847",
              "aircraft": {
                "code": "789"
              },
              "operating": {
                "carrierCode": "NH"
              },
              "duration": "PT6H40M",
              "id": "87",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "EUR",
        "total": "6167.88",
        "base": "5735.00",
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          }
        ],
        "grandTotal": "6167.88"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "NH"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "6167.88",
            "base": "5735.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "86",
              "cabin": "PREMIUM_ECONOMY",
              "fareBasis": "GFA0WQOG",
              "class": "G",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "87",
              "cabin": "ECONOMY",
              "fareBasis": "Y2XOWA1",
              "class": "Y",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]
    }
  ],
  "dictionaries": {
    "locations": {
      "BKK": {
        "cityCode": "BKK",
        "countryCode": "TH"
      },
      "DMK": {
        "cityCode": "BKK",
        "countryCode": "TH"
      },
      "KUL": {
        "cityCode": "KUL",
        "countryCode": "MY"
      },
      "HKG": {
        "cityCode": "HKG",
        "countryCode": "HK"
      },
      "DPS": {
        "cityCode": "DPS",
        "countryCode": "ID"
      },
      "TPE": {
        "cityCode": "TPE",
        "countryCode": "TW"
      },
      "MNL": {
        "cityCode": "MNL",
        "countryCode": "PH"
      },
      "NRT": {
        "cityCode": "TYO",
        "countryCode": "JP"
      },
      "MEL": {
        "cityCode": "MEL",
        "countryCode": "AU"
      },
      "ICN": {
        "cityCode": "SEL",
        "countryCode": "KR"
      },
      "SIN": {
        "cityCode": "SIN",
        "countryCode": "SG"
      },
      "SYD": {
        "cityCode": "SYD",
        "countryCode": "AU"
      },
      "HND": {
        "cityCode": "TYO",
        "countryCode": "JP"
      }
    },
    "aircraft": {
      "320": "AIRBUS A320",
      "321": "AIRBUS A321",
      "333": "AIRBUS A330-300",
      "359": "AIRBUS A350-900",
      "388": "AIRBUS A380-800",
      "738": "BOEING 737-800",
      "787": "787  ALL SERIES PASSENGER",
      "788": "BOEING 787-8",
      "789": "BOEING 787-9",
      "73H": "BOEING 737-800 (WINGLETS)",
      "32N": "AIRBUS A320NEO",
      "32Q": "AIRBUS A321NEO",
      "77W": "BOEING 777-300ER"
    },
    "currencies": {
      "EUR": "EURO"
    },
    "carriers": {
      "PR": "PHILIPPINE AIRLINES",
      "EK": "EMIRATES",
      "CI": "CHINA AIRLINES LTD.",
      "JQ": "JETSTAR",
      "TG": "THAI AIRWAYS INTERNATIONAL",
      "CX": "CATHAY PACIFIC",
      "OD": "BATIK AIR MALAYSIA",
      "QF": "QANTAS AIRWAYS",
      "KE": "KOREAN AIR",
      "NH": "ALL NIPPON AIRWAYS",
      "ID": "BATIK AIR INDONESIA",
      "MH": "MALAYSIA AIRLINES",
      "TR": "SCOOT",
      "SQ": "SINGAPORE AIRLINES"
    }
  }
}