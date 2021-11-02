import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  FieldResolver,
  Root,
} from "type-graphql";
import { Context } from "../../context";
import { BuyProductInput } from "./BuyProductInput";
import { Cart as CartEntity } from "@nexusblog/db";
import { Cart } from "./Cart";

@Resolver((of) => Cart)
export class CartResolver {
  @FieldResolver()
  items(@Root() cart: CartEntity) {
    return Array.from(cart.cartProducts.values());
  }

  @Mutation((returns) => Cart)
  async buyProduct(
    @Arg("input") input: BuyProductInput,
    @Ctx() ctx: Context
  ): Promise<CartEntity> {
    return ctx.db.addToCart({
      productId: input.productId,
      count: input.count!,
      customerId: ctx.customer.id,
    });
  }
}
