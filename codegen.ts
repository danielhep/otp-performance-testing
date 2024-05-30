import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://hopelink-qa-otp.ibi-transit.com/otp/gtfs/v1",
	documents: "src/**/*.ts",
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
		},
	},
};

export default config;
