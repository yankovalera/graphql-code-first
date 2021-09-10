import { ApolloServer } from "apollo-server";
import schema from "./src/schema";
import { context, Context } from "./src/context";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  schema,
  context: (): Context => {
    return context;
  },
});

// The `listen` method launches a web server.
server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
