import { graphql } from "../gql";
const planQuery = graphql(/* GraphQL */ `
query Plan($arriveBy: Boolean, $banned: InputBanned, $bikeReluctance: Float, $carReluctance: Float, $date: String, $fromPlace: String!, $modes: [TransportMode], $numItineraries: Int, $preferred: InputPreferred, $time: String, $toPlace: String!, $unpreferred: InputUnpreferred, $walkReluctance: Float, $walkSpeed: Float, $wheelchair: Boolean) {
  plan(
    arriveBy: $arriveBy
    banned: $banned
    bikeReluctance: $bikeReluctance
    carReluctance: $carReluctance
    date: $date
    fromPlace: $fromPlace
    locale: "en"
    numItineraries: $numItineraries
    preferred: $preferred
    time: $time
    toPlace: $toPlace
    transportModes: $modes
    unpreferred: $unpreferred
    walkReluctance: $walkReluctance
    walkSpeed: $walkSpeed
    wheelchair: $wheelchair
  ) {
    itineraries {
      accessibilityScore
      duration
      endTime
      legs {
        accessibilityScore
        agency {
          alerts {
            alertDescriptionText
            alertHeaderText
            alertUrl
            effectiveStartDate
            id
          }
          gtfsId: id
          name
          timezone
          url
        }
        alerts {
          alertDescriptionText
          alertHeaderText
          alertUrl
          effectiveStartDate
          id
        }
        arrivalDelay
        departureDelay
        distance
        dropoffType
        duration
        endTime
        fareProducts {
          id
          product {
            __typename
            id
            medium {
              id
              name
            }
            name
            riderCategory {
              id
              name
            }
            ... on DefaultFareProduct {
              price {
                amount
                currency {
                  code
                  digits
                }
              }
            }
          }
        }
        from {
          lat
          lon
          name
          rentalVehicle {
            id
            network
          }
          stop {
            alerts {
              alertDescriptionText
              alertHeaderText
              alertUrl
              effectiveStartDate
              id
            }
            code
            gtfsId
            id
          }
          vertexType
        }
        headsign
        interlineWithPreviousLeg
        intermediateStops {
          lat
          locationType
          lon
          name
          stopCode: code
          stopId: id
        }
        legGeometry {
          length
          points
        }
        mode
        pickupBookingInfo {
          earliestBookingTime {
            daysPrior
          }
        }
        pickupType
        realTime
        realtimeState
        rentedBike
        rideHailingEstimate {
          arrival
          maxPrice {
            amount
            currency {
              code
            }
          }
          minPrice {
            amount
            currency {
              code
            }
          }
          provider {
            id
          }
        }
        route {
          alerts {
            alertDescriptionText
            alertHeaderText
            alertUrl
            effectiveStartDate
            id
          }
          color
          gtfsId
          id: gtfsId
          longName
          shortName
          textColor
          type
        }
        startTime
        steps {
          absoluteDirection
          alerts {
            alertDescriptionText
            alertHeaderText
            alertUrl
            effectiveStartDate
            id
          }
          area
          distance
          elevationProfile {
            distance
            elevation
          }
          lat
          lon
          relativeDirection
          stayOn
          streetName
        }
        to {
          lat
          lon
          name
          rentalVehicle {
            id
            network
          }
          stop {
            alerts {
              alertDescriptionText
              alertHeaderText
              alertUrl
              effectiveStartDate
              id
            }
            code
            gtfsId
            id
          }
          vertexType
        }
        transitLeg
        trip {
          arrivalStoptime {
            stop {
              gtfsId
              id
            }
            stopPosition
          }
          departureStoptime {
            stop {
              gtfsId
              id
            }
            stopPosition
          }
          gtfsId
          id
        }
      }
      startTime
      waitingTime
      walkTime
    }
    routingErrors {
      code
      description
      inputField
    }
  }
}
`);

export default planQuery;
