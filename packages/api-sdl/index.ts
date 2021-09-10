import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { context, Context } from "./src/context";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (): Context => {
    return context;
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
