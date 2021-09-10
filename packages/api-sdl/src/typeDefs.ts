import { gql } from "apollo-server";

const typeDefs = gql`
  input BuyProductInput {
    count: Int = 1
    productId: ID!
  }

  type Cart {
    id: Int
    items: [CartProduct]!
  }

  type CartProduct {
    count: Int
    product: Product
  }

  type Mutation {
    buyProduct(input: BuyProductInput!): Cart!
  }

  type Product {
    id: ID
    inStock: Boolean
    price: Int
    title: String
  }

  type Query {
    products: [Product]!
  }
`;

export default typeDefs;
