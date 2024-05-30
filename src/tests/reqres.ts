import exec from "k6/execution";
import type { Options } from "k6/options";
import { logger } from "../utils/logger";
import { fromToPairs } from "../data/from-to-pairs";
import { modeCombinations } from "../data/mode-combinations";

const { vu } = exec;

export const options: Options = {
	scenarios: {
		flexTest: {
			executor: "per-vu-iterations",
			vus: 1,
			iterations: 1,
			maxDuration: "10m",
			env: {
				fromToKey: "tacomaToEverett",
				modeCombinationKey: "transitWithFlex",
			},
		},
	},
};

// type TypeMatrix = {
// 	modeName: string;
// 	fromName: string;
// 	toName: string;
// 	modeCombination: ModeCombination;
// }[];

// const testMatrix = new SharedArray("testMatrix", () => {
//   const filteredFromToPairs =

// 	return Object.keys(fromToPairs).reduce<TypeMatrix>((prev, cur) => {
// 		const fromToPair = fromToPairs[cur];
// 		return prev.concat(
// 			Object.keys(modeCombinations).reduce<TypeMatrix>((prev, cur) => {
// 				const modeCombination = modeCombinations[cur];
// 				prev.push({
// 					modeName: cur,
// 					fromName: fromToPair.fromPlace,
// 					toName: fromToPair.toPlace,
// 					modeCombination: modeCombination,
// 				});
// 				return prev;
// 			}, []),
// 		);
// 	}, []);
// });

export default function test() {
	const fromToPair = fromToPairs[__ENV.fromToKey];
	const modeCombination = modeCombinations[__ENV.modeCombinationKey];

	// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
	logger.info(`Running iteration for mode combination HELLO HELLO 4`);
}
