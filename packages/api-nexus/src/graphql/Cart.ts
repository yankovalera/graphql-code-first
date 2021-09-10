import { extendType, inputObjectType, objectType, nonNull } from "nexus";

export const Cart = objectType({
  name: "Cart",
  definition(t) {
    t.int("id");
    t.nonNull.list.field("items", {
      type: "CartProduct",
      resolve(parent, _args) {
        return Array.from(parent.cartProducts.values());
      },
    });
  },
});

export const BuyProductInput = inputObjectType({
  name: "BuyProductInput",
  definition(t) {
    t.nonNull.id("productId");
    t.int("count", { default: 1 });
  },
});

export const CartMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("buyProduct", {
      type: "Cart",
      args: {
        input: nonNull(BuyProductInput),
      },
      resolve(_root, { input }, ctx) {
        return ctx.db.addToCart({
          productId: input.productId,
          count: input.count!,
          customerId: ctx.customer.id,
        });
      },
    });
  },
});

export const BaseCartProduct = objectType({
  name: "CartProduct",
  definition(t) {
    t.int("count");
  },
});
