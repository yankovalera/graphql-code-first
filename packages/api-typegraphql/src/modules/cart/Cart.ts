import { ObjectType, Field, ID } from "type-graphql";
import { CartProduct } from "./CartProduct";

@ObjectType()
export class Cart {
  @Field((type) => ID)
  id: string;

  @Field((type) => [CartProduct])
  items: CartProduct[];
}
