import { InputType, Field, ID, Int } from "type-graphql";

@InputType()
export class BuyProductInput {
  @Field((type) => Int, { defaultValue: 1 })
  count: number;

  @Field((type) => ID)
  productId: string;
}
