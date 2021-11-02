import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class BaseCartProduct {
  @Field((type) => ID)
  count: number;
}
