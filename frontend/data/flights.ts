export const flightList= [
          {
            "id": "13542-2402201235--30598-0-12712-2402201550",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 495,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:35:00",
            "arrival": "2024-02-20T15:50:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-12712-2402201235-2402201550--30598",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:35:00",
                "arrival": "2024-02-20T15:50:00",
                "durationInMinutes": 495,
                "flightNumber": "701",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221810--30598-0-13542-2402230600",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 410,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-22T18:10:00",
            "arrival": "2024-02-23T06:00:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-13542-2402221810-2402230600--30598",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-22T18:10:00",
                "arrival": "2024-02-23T06:00:00",
                "durationInMinutes": 410,
                "flightNumber": "702",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          }
        ]