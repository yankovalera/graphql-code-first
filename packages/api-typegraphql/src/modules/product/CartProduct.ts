import { ObjectType, Field, Root, Ctx } from "type-graphql";
import { BaseCartProduct } from "../cart/BaseCartProduct";
import {
  CartProduct as CartProductEntity,
  Product as ProductEntity,
} from "@nexusblog/db";
import { Product } from "../product/Product";
import { Context } from "../../context";

@ObjectType()
export class CartProduct extends BaseCartProduct {
  @Field((type) => Product)
  product(@Root() parent: CartProductEntity, @Ctx() ctx: Context) {
    return ctx.db.products.find(
      (value: ProductEntity) => value.id == parent.productId
    );
  }
}
