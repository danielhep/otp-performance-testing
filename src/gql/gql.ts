/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery Plan($arriveBy: Boolean, $banned: InputBanned, $bikeReluctance: Float, $carReluctance: Float, $date: String, $fromPlace: String!, $modes: [TransportMode], $numItineraries: Int, $preferred: InputPreferred, $time: String, $toPlace: String!, $unpreferred: InputUnpreferred, $walkReluctance: Float, $walkSpeed: Float, $wheelchair: Boolean) {\n  plan(\n    arriveBy: $arriveBy\n    banned: $banned\n    bikeReluctance: $bikeReluctance\n    carReluctance: $carReluctance\n    date: $date\n    fromPlace: $fromPlace\n    locale: \"en\"\n    numItineraries: $numItineraries\n    preferred: $preferred\n    time: $time\n    toPlace: $toPlace\n    transportModes: $modes\n    unpreferred: $unpreferred\n    walkReluctance: $walkReluctance\n    walkSpeed: $walkSpeed\n    wheelchair: $wheelchair\n  ) {\n    itineraries {\n      accessibilityScore\n      duration\n      endTime\n      legs {\n        accessibilityScore\n        agency {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          gtfsId: id\n          name\n          timezone\n          url\n        }\n        alerts {\n          alertDescriptionText\n          alertHeaderText\n          alertUrl\n          effectiveStartDate\n          id\n        }\n        arrivalDelay\n        departureDelay\n        distance\n        dropoffType\n        duration\n        endTime\n        fareProducts {\n          id\n          product {\n            __typename\n            id\n            medium {\n              id\n              name\n            }\n            name\n            riderCategory {\n              id\n              name\n            }\n            ... on DefaultFareProduct {\n              price {\n                amount\n                currency {\n                  code\n                  digits\n                }\n              }\n            }\n          }\n        }\n        from {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        headsign\n        interlineWithPreviousLeg\n        intermediateStops {\n          lat\n          locationType\n          lon\n          name\n          stopCode: code\n          stopId: id\n        }\n        legGeometry {\n          length\n          points\n        }\n        mode\n        pickupBookingInfo {\n          earliestBookingTime {\n            daysPrior\n          }\n        }\n        pickupType\n        realTime\n        realtimeState\n        rentedBike\n        rideHailingEstimate {\n          arrival\n          maxPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          minPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          provider {\n            id\n          }\n        }\n        route {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          color\n          gtfsId\n          id: gtfsId\n          longName\n          shortName\n          textColor\n          type\n        }\n        startTime\n        steps {\n          absoluteDirection\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          area\n          distance\n          elevationProfile {\n            distance\n            elevation\n          }\n          lat\n          lon\n          relativeDirection\n          stayOn\n          streetName\n        }\n        to {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        transitLeg\n        trip {\n          arrivalStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          departureStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          gtfsId\n          id\n        }\n      }\n      startTime\n      waitingTime\n      walkTime\n    }\n    routingErrors {\n      code\n      description\n      inputField\n    }\n  }\n}\n": types.PlanDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Plan($arriveBy: Boolean, $banned: InputBanned, $bikeReluctance: Float, $carReluctance: Float, $date: String, $fromPlace: String!, $modes: [TransportMode], $numItineraries: Int, $preferred: InputPreferred, $time: String, $toPlace: String!, $unpreferred: InputUnpreferred, $walkReluctance: Float, $walkSpeed: Float, $wheelchair: Boolean) {\n  plan(\n    arriveBy: $arriveBy\n    banned: $banned\n    bikeReluctance: $bikeReluctance\n    carReluctance: $carReluctance\n    date: $date\n    fromPlace: $fromPlace\n    locale: \"en\"\n    numItineraries: $numItineraries\n    preferred: $preferred\n    time: $time\n    toPlace: $toPlace\n    transportModes: $modes\n    unpreferred: $unpreferred\n    walkReluctance: $walkReluctance\n    walkSpeed: $walkSpeed\n    wheelchair: $wheelchair\n  ) {\n    itineraries {\n      accessibilityScore\n      duration\n      endTime\n      legs {\n        accessibilityScore\n        agency {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          gtfsId: id\n          name\n          timezone\n          url\n        }\n        alerts {\n          alertDescriptionText\n          alertHeaderText\n          alertUrl\n          effectiveStartDate\n          id\n        }\n        arrivalDelay\n        departureDelay\n        distance\n        dropoffType\n        duration\n        endTime\n        fareProducts {\n          id\n          product {\n            __typename\n            id\n            medium {\n              id\n              name\n            }\n            name\n            riderCategory {\n              id\n              name\n            }\n            ... on DefaultFareProduct {\n              price {\n                amount\n                currency {\n                  code\n                  digits\n                }\n              }\n            }\n          }\n        }\n        from {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        headsign\n        interlineWithPreviousLeg\n        intermediateStops {\n          lat\n          locationType\n          lon\n          name\n          stopCode: code\n          stopId: id\n        }\n        legGeometry {\n          length\n          points\n        }\n        mode\n        pickupBookingInfo {\n          earliestBookingTime {\n            daysPrior\n          }\n        }\n        pickupType\n        realTime\n        realtimeState\n        rentedBike\n        rideHailingEstimate {\n          arrival\n          maxPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          minPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          provider {\n            id\n          }\n        }\n        route {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          color\n          gtfsId\n          id: gtfsId\n          longName\n          shortName\n          textColor\n          type\n        }\n        startTime\n        steps {\n          absoluteDirection\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          area\n          distance\n          elevationProfile {\n            distance\n            elevation\n          }\n          lat\n          lon\n          relativeDirection\n          stayOn\n          streetName\n        }\n        to {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        transitLeg\n        trip {\n          arrivalStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          departureStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          gtfsId\n          id\n        }\n      }\n      startTime\n      waitingTime\n      walkTime\n    }\n    routingErrors {\n      code\n      description\n      inputField\n    }\n  }\n}\n"): (typeof documents)["\nquery Plan($arriveBy: Boolean, $banned: InputBanned, $bikeReluctance: Float, $carReluctance: Float, $date: String, $fromPlace: String!, $modes: [TransportMode], $numItineraries: Int, $preferred: InputPreferred, $time: String, $toPlace: String!, $unpreferred: InputUnpreferred, $walkReluctance: Float, $walkSpeed: Float, $wheelchair: Boolean) {\n  plan(\n    arriveBy: $arriveBy\n    banned: $banned\n    bikeReluctance: $bikeReluctance\n    carReluctance: $carReluctance\n    date: $date\n    fromPlace: $fromPlace\n    locale: \"en\"\n    numItineraries: $numItineraries\n    preferred: $preferred\n    time: $time\n    toPlace: $toPlace\n    transportModes: $modes\n    unpreferred: $unpreferred\n    walkReluctance: $walkReluctance\n    walkSpeed: $walkSpeed\n    wheelchair: $wheelchair\n  ) {\n    itineraries {\n      accessibilityScore\n      duration\n      endTime\n      legs {\n        accessibilityScore\n        agency {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          gtfsId: id\n          name\n          timezone\n          url\n        }\n        alerts {\n          alertDescriptionText\n          alertHeaderText\n          alertUrl\n          effectiveStartDate\n          id\n        }\n        arrivalDelay\n        departureDelay\n        distance\n        dropoffType\n        duration\n        endTime\n        fareProducts {\n          id\n          product {\n            __typename\n            id\n            medium {\n              id\n              name\n            }\n            name\n            riderCategory {\n              id\n              name\n            }\n            ... on DefaultFareProduct {\n              price {\n                amount\n                currency {\n                  code\n                  digits\n                }\n              }\n            }\n          }\n        }\n        from {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        headsign\n        interlineWithPreviousLeg\n        intermediateStops {\n          lat\n          locationType\n          lon\n          name\n          stopCode: code\n          stopId: id\n        }\n        legGeometry {\n          length\n          points\n        }\n        mode\n        pickupBookingInfo {\n          earliestBookingTime {\n            daysPrior\n          }\n        }\n        pickupType\n        realTime\n        realtimeState\n        rentedBike\n        rideHailingEstimate {\n          arrival\n          maxPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          minPrice {\n            amount\n            currency {\n              code\n            }\n          }\n          provider {\n            id\n          }\n        }\n        route {\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          color\n          gtfsId\n          id: gtfsId\n          longName\n          shortName\n          textColor\n          type\n        }\n        startTime\n        steps {\n          absoluteDirection\n          alerts {\n            alertDescriptionText\n            alertHeaderText\n            alertUrl\n            effectiveStartDate\n            id\n          }\n          area\n          distance\n          elevationProfile {\n            distance\n            elevation\n          }\n          lat\n          lon\n          relativeDirection\n          stayOn\n          streetName\n        }\n        to {\n          lat\n          lon\n          name\n          rentalVehicle {\n            id\n            network\n          }\n          stop {\n            alerts {\n              alertDescriptionText\n              alertHeaderText\n              alertUrl\n              effectiveStartDate\n              id\n            }\n            code\n            gtfsId\n            id\n          }\n          vertexType\n        }\n        transitLeg\n        trip {\n          arrivalStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          departureStoptime {\n            stop {\n              gtfsId\n              id\n            }\n            stopPosition\n          }\n          gtfsId\n          id\n        }\n      }\n      startTime\n      waitingTime\n      walkTime\n    }\n    routingErrors {\n      code\n      description\n      inputField\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;