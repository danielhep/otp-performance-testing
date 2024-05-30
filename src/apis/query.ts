import type { FromToPair } from "../data/from-to-pairs";
import type { ModeCombination } from "../data/mode-combinations";
import request, { GraphQLClient } from "graphql-request";
import { parse } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "graphql-request";
import planQuery from "./planQuery";

export async function sendPlanQuery(
	fromTo: FromToPair,
	modeCombination: ModeCombination,
) {
	const url = __ENV.URL;
	const variables = {
		fromPlace: fromTo.fromPlace,
		toPlace: fromTo.toPlace,
	};
	const data = await request(url, planQuery, variables);
}
