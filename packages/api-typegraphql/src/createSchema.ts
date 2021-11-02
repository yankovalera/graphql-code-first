import { buildSchema } from "type-graphql";
import { CartResolver } from "./modules/cart/CartResolver";
import { ProductResolver } from "./modules/product/ProductResolver";

export async function createSchema() {
  return buildSchema({
    resolvers: [ProductResolver, CartResolver],
  });
}
