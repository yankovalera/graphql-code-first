import { ObjectType, Field, ID, Root, Int } from "type-graphql";

@ObjectType()
export class Product {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}
