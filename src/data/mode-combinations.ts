export type TransportMode = {
	mode: string;
	qualifier?: string;
};

export type ModeCombination = TransportMode[];

export const modeCombinations: Record<string, ModeCombination> = {
	transitOnly: [
		{
			mode: "TRANSIT",
		},
	],
	transitWithFlex: [
		{
			mode: "TRANSIT",
		},
		{
			mode: "FLEX",
			qualifier: "ACCESS",
		},
		{
			mode: "FLEX",
			qualifier: "EGRESS",
		},
	],
	transitFlexDirect: [
		{
			mode: "TRANSIT",
		},
		{
			mode: "FLEX",
			qualifier: "DIRECT",
		},
	],
	walk: [
		{
			mode: "WALK",
		},
	],
};
