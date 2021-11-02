import { ObjectType, Field, ID, Root, Int } from "type-graphql";
import { Product as ProductEntity } from "@nexusblog/db";

@ObjectType()
export class Product {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;

  @Field()
  inStock(@Root() product: ProductEntity): boolean {
    return product.stock > 0;
  }
}
