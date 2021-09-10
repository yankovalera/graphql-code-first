import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "..", "..", "generated", "nexus-typegen.ts"),
    schema: join(__dirname, "..", "..", "generated", "schema.graphql"),
  },
  contextType: {
    module: join(__dirname, "context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: join(__dirname, "..", "..", "shared-db", "index.ts"),
        alias: "db",
      },
    ],
  },
});

export default schema;
