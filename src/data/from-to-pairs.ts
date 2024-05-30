export type FromToPair = {
	fromPlace: string;
	toPlace: string;
};

export const fromToPairs: Record<string, FromToPair> = {
	tacomaToEverett: {
		fromPlace:
			"2102 Hewitt Avenue, Everett, WA, USA::47.979172920546915,-122.20139578761193}",
		toPlace:
			"1745 Market Street, Tacoma, WA, USA::47.24557538008375,-122.43897586753877}",
	},
	northgateAngleLake: {
		fromPlace: "Angle Lake (Sound Transit)::47.422703,-122.297714}",
		toPlace: "Northgate Station (Community Transit)::47.702047,-122.328196}",
	},
};
