import { ObjectType, Field, ID, Root } from "type-graphql";
import { Product as ProductEntity } from "@nexusblog/db";

@ObjectType()
export class Product {
  @Field((type) => ID)
  id: string;

  @Field()
  inStock(@Root() product: ProductEntity): boolean {
    return product.stock > 0;
  }

  @Field()
  price: number;

  @Field()
  title: string;
}
