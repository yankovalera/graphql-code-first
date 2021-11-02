import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { context, Context } from "./src/context";
import { createSchema } from "./src/createSchema";

const start = async () => {
  const schema = await createSchema();

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    schema,
    context: (): Context => {
      return context;
    },
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}graphql`);
  });
};

start();
