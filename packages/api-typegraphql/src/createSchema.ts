import { buildSchema } from "type-graphql";

export async function createSchema() {
  return buildSchema({
    resolvers: [__dirname + "/modules/**/*Resolver.ts"],
  });
}
