import { extendType, objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.id("id");
    t.string("title");
    t.int("price");
    t.boolean("inStock", {
      resolve(parent) {
        return parent.stock > 0;
      },
    });
  },
});

export const CartProductWithProduct = extendType({
  type: "CartProduct",
  definition(t) {
    t.field("product", {
      type: "Product",
      resolve(parent, _args, ctx) {
        return ctx.db.products.find(
          (product) => product.id == parent.productId
        );
      },
    });
  },
});

export const ProductQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("products", {
      type: "Product",
      resolve(_root, _args, ctx) {
        return ctx.db.products;
      },
    });
  },
});
