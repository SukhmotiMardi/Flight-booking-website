import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import FlightListingCard from "../../component/FlightListingCard/FlightListingCard";

const parseDuration = (duration) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
  const match = duration.match(regex);
  console.log(match,"time regex match")
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  return hours * 60 + minutes;
};

const dummyData=[
   {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "oneWay": false,
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT2H40M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T07:35:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-07-31T10:15:00"
              },
              "carrierCode": "AI",
              "number": "9444",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "IX"
              },
              "duration": "PT2H40M",
              "id": "46",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "5109.00",
        "base": "3747.00",
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
        "grandTotal": "5109.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "5109.00",
            "base": "3747.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "46",
              "cabin": "ECONOMY",
              "fareBasis": "SL1YXYII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "S",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT9H5M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T21:20:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T23:55:00"
              },
              "carrierCode": "AI",
              "number": "464",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H35M",
              "id": "9",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-08-01T03:30:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "1",
                "at": "2025-08-01T06:25:00"
              },
              "carrierCode": "AI",
              "number": "2653",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H55M",
              "id": "10",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9046.00",
        "base": "7263.00",
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
        "grandTotal": "9046.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9046.00",
            "base": "7263.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "9",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "10",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT9H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T20:30:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T23:05:00"
              },
              "carrierCode": "AI",
              "number": "2708",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H35M",
              "id": "61",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-08-01T03:30:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "1",
                "at": "2025-08-01T06:25:00"
              },
              "carrierCode": "AI",
              "number": "2653",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H55M",
              "id": "62",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9046.00",
        "base": "7263.00",
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
        "grandTotal": "9046.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9046.00",
            "base": "7263.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "61",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "62",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT10H30M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T21:20:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T23:55:00"
              },
              "carrierCode": "AI",
              "number": "464",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H35M",
              "id": "38",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-08-01T05:00:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-08-01T07:50:00"
              },
              "carrierCode": "AI",
              "number": "9483",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "IX"
              },
              "duration": "PT2H50M",
              "id": "39",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9046.00",
        "base": "7263.00",
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
        "grandTotal": "9046.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9046.00",
            "base": "7263.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "38",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "39",
              "cabin": "ECONOMY",
              "fareBasis": "UU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "U",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT9H35M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T22:30:00"
              },
              "arrival": {
                "iataCode": "BOM",
                "terminal": "2",
                "at": "2025-08-01T01:30:00"
              },
              "carrierCode": "AI",
              "number": "773",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT3H",
              "id": "40",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "BOM",
                "terminal": "2",
                "at": "2025-08-01T06:00:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "1",
                "at": "2025-08-01T08:05:00"
              },
              "carrierCode": "AI",
              "number": "2845",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H5M",
              "id": "41",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9716.00",
        "base": "7880.00",
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
        "grandTotal": "9716.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9716.00",
            "base": "7880.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "40",
              "cabin": "ECONOMY",
              "fareBasis": "GU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "G",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "41",
              "cabin": "ECONOMY",
              "fareBasis": "GU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "G",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 6,
      "itineraries": [
        {
          "duration": "PT10H",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T22:30:00"
              },
              "arrival": {
                "iataCode": "BOM",
                "terminal": "2",
                "at": "2025-08-01T01:30:00"
              },
              "carrierCode": "AI",
              "number": "773",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT3H",
              "id": "1",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "BOM",
                "terminal": "2",
                "at": "2025-08-01T06:25:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-08-01T08:30:00"
              },
              "carrierCode": "AI",
              "number": "2603",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H5M",
              "id": "2",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9716.00",
        "base": "7880.00",
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
        "grandTotal": "9716.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9716.00",
            "base": "7880.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "GU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "G",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "GU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "G",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 6,
      "itineraries": [
        {
          "duration": "PT6H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T08:40:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T11:20:00"
              },
              "carrierCode": "AI",
              "number": "2778",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H40M",
              "id": "19",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T12:10:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-07-31T15:00:00"
              },
              "carrierCode": "AI",
              "number": "2417",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H50M",
              "id": "20",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9835.00",
        "base": "8015.00",
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
        "grandTotal": "9835.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9835.00",
            "base": "8015.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "19",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "20",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT7H45M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T07:15:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T09:45:00"
              },
              "carrierCode": "AI",
              "number": "763",
              "aircraft": {
                "code": "321"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H30M",
              "id": "49",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T12:10:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-07-31T15:00:00"
              },
              "carrierCode": "AI",
              "number": "2417",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H50M",
              "id": "50",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9835.00",
        "base": "8015.00",
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
        "grandTotal": "9835.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9835.00",
            "base": "8015.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "49",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "50",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 9,
      "itineraries": [
        {
          "duration": "PT11H20M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T20:30:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T23:05:00"
              },
              "carrierCode": "AI",
              "number": "2708",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H35M",
              "id": "27",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-08-01T05:00:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-08-01T07:50:00"
              },
              "carrierCode": "AI",
              "number": "9483",
              "aircraft": {
                "code": "320"
              },
              "operating": {
                "carrierCode": "IX"
              },
              "duration": "PT2H50M",
              "id": "28",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9835.00",
        "base": "8015.00",
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
        "grandTotal": "9835.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9835.00",
            "base": "8015.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "27",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "28",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
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
      "isUpsellOffer": false,
      "lastTicketingDate": "2025-07-30",
      "lastTicketingDateTime": "2025-07-30",
      "numberOfBookableSeats": 4,
      "itineraries": [
        {
          "duration": "PT7H55M",
          "segments": [
            {
              "departure": {
                "iataCode": "CCU",
                "at": "2025-07-31T10:25:00"
              },
              "arrival": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T12:55:00"
              },
              "carrierCode": "AI",
              "number": "2706",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H30M",
              "id": "59",
              "numberOfStops": 0,
              "blacklistedInEU": false
            },
            {
              "departure": {
                "iataCode": "DEL",
                "terminal": "3",
                "at": "2025-07-31T15:30:00"
              },
              "arrival": {
                "iataCode": "BLR",
                "terminal": "2",
                "at": "2025-07-31T18:20:00"
              },
              "carrierCode": "AI",
              "number": "2664",
              "aircraft": {
                "code": "32N"
              },
              "operating": {
                "carrierCode": "AI"
              },
              "duration": "PT2H50M",
              "id": "60",
              "numberOfStops": 0,
              "blacklistedInEU": false
            }
          ]
        }
      ],
      "price": {
        "currency": "INR",
        "total": "9835.00",
        "base": "8015.00",
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
        "grandTotal": "9835.00"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
      },
      "validatingAirlineCodes": [
        "AI"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "INR",
            "total": "9835.00",
            "base": "8015.00"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "59",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            },
            {
              "segmentId": "60",
              "cabin": "ECONOMY",
              "fareBasis": "LU1YXEII",
              "brandedFare": "ECOVALU",
              "brandedFareLabel": "ECO VALUE",
              "class": "L",
              "includedCheckedBags": {
                "weight": 15,
                "weightUnit": "KG"
              },
              "includedCabinBags": {
                "weight": 7,
                "weightUnit": "KG"
              },
              "amenities": [
                {
                  "description": "PRE RESERVED SEAT ASSIGNMENT",
                  "isChargeable": false,
                  "amenityType": "PRE_RESERVED_SEAT",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "MEAL SERVICES",
                  "isChargeable": false,
                  "amenityType": "MEAL",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "REFUNDABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "CHANGEABLE TICKET",
                  "isChargeable": true,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "UPGRADE",
                  "isChargeable": true,
                  "amenityType": "UPGRADES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                },
                {
                  "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                  "isChargeable": false,
                  "amenityType": "BRANDED_FARES",
                  "amenityProvider": {
                    "name": "BrandedFare"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
]
const FlightList = () => {
  const [flightData, setFlightData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: "price", direction: "asc" });
  const location = useLocation();
  const access_token = Cookies.get("access_token");

  const getFlightListApi = async () => {
    const payload = {
      originLocationCode: location.state.originLocationCode,
      destinationLocationCode: location.state.destinationLocationCode,
      departureDate: location.state.departureDate,
      adults: location.state.adults.adults,
      travelClass: location.state.travelClass,
    };
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${
          payload.originLocationCode
        }&destinationLocationCode=${
          payload.destinationLocationCode
        }&departureDate=${payload.departureDate}&adults=${
          payload.adults
        }&travelClass=${payload.travelClass.toUpperCase()}&currencyCode=INR&max=10`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      if (response) {
        setFlightData(response.data.data);
        setFilteredData(response.data.data);
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
      setFlightData(dummyData);
        setFilteredData(dummyData);
    }
  };

  const sortedData = (field) => {
    const newDirection =
      sortConfig.field === field && sortConfig.direction === "asc" ? "desc" : "asc";

    setSortConfig({ field, direction: newDirection });

    const sorted = [...flightData].sort((a, b) => {
      if (field === "price") {
        const priceA = parseFloat(a.price.total);
        const priceB = parseFloat(b.price.total);
        return newDirection === "asc" ? priceA - priceB : priceB - priceA;
      } else if (field === "duration") {
        const durationA = parseDuration(a.itineraries[0].duration);
        const durationB = parseDuration(b.itineraries[0].duration);
        return newDirection === "asc" ? durationA - durationB : durationB - durationA;
      } else if (field === "departure") {
        const departureA = new Date(a.itineraries[0].segments[0].departure.at);
        const departureB = new Date(b.itineraries[0].segments[0].departure.at);
        return newDirection === "asc" ? departureA - departureB : departureB - departureA;
      }
      return 0;
    });

    setFilteredData(sorted);
    console.log(sorted, "sorted data");
  };

  useEffect(() => {
    getFlightListApi();
  }, []);

  if (!flightData || flightData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading flight data...</p>
        </div>
      </div>
    );
  }
   return (
    <div className="flex justify-center w-full mt-28">
      <div className="max-w-[1340px] w-full mx-auto px-4 lg:px-8 xl:px-12">
        {/* Sort Section */}
        <div className="flex justify-center items-center my-6 gap-6">
          Sort By:
          <div>
            <div className="bg-[#073C5E] mx-auto rounded-md w-[800px] text-white p-3 flex h-[55px] flex-row items-center justify-between gap-4">
              <div
                onClick={() => sortedData("price")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 border-r border-dashed cursor-pointer border-yellow-400 ${sortConfig.field === "price" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Price: <b>{sortConfig.field === "price" && sortConfig.direction === "asc" ? "Low to High" : "High to Low"}</b>
                </p>
                {sortConfig.field === "price" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
              <div
                onClick={() => sortedData("duration")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 border-r border-dashed cursor-pointer border-yellow-400 ${sortConfig.field === "duration" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Fastest: <b>{sortConfig.field === "duration" && sortConfig.direction === "asc" ? "Shortest First" : "Longest First"}</b>
                </p>
                {sortConfig.field === "duration" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
              <div
                onClick={() => sortedData("departure")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 cursor-pointer ${sortConfig.field === "departure" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Departure: <b>{sortConfig.field === "departure" && sortConfig.direction === "asc" ? "Earliest First" : "Latest First"}</b>
                </p>
                {sortConfig.field === "departure" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
            </div>
          </div>
        </div>
        {/* Flight Card */}
        <div className="flex flex-col gap-4">
          {filteredData.map((flight) => (
            <FlightListingCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightList;