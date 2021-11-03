import { Query, Resolver, Ctx, FieldResolver, Root } from "type-graphql";
import { Product as ProductEntity } from "@nexusblog/db";
import { Product } from "./Product";
import { Context } from "../../context";

@Resolver((of) => Product)
export class ProductResolver {
  @FieldResolver()
  inStock(@Root() product: ProductEntity): boolean {
    return product.stock > 0;
  }

  @Query((returns) => [Product])
  products(@Ctx() context: Context) {
    return context.db.products;
  }
}
