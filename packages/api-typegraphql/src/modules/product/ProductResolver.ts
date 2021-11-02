import { Query, Resolver, Ctx } from "type-graphql";
import { Product } from "./Product";
import { Context } from "../../context";

@Resolver()
export class ProductResolver {
  @Query((returns) => [Product])
  products(@Ctx() context: Context) {
    return context.db.products;
  }
}
