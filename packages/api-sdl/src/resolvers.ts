import { Context } from "./context";

const resolvers = {
  Query: {
    products: (_root, _args, context: Context) => context.db.products,
  },
  Mutation: {
    buyProduct: (_root, { input }, context: Context) =>
      context.db.addToCart({
        ...input,
        customerId: context.customer.id,
      }),
  },
  Cart: {
    items: (root) => {
      console.log(root);

      return Array.from(root.cartProducts.values());
    },
  },
  CartProduct: {
    product: (root, _args, context: Context) =>
      context.db.products.find((product) => root.productId == product.id),
  },
};

export default resolvers;
