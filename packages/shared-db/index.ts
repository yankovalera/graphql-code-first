export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
}

export interface Customer {
  id: string;
  username: string;
}

export interface CartProduct {
  productId: string;
  count: number;
}

export interface Cart {
  id: string;
  cartProducts: Map<string, CartProduct>;
  customerId: number;
}

export interface AddToCartInput {
  productId: string;
  customerId: string;
  count: number;
}

export interface Db {
  products: Product[];
  carts: Cart[];

  addToCart(input: AddToCartInput): Cart;
}

const products: Product[] = [
  { id: "1", title: "Ficus", price: 2000, stock: 100 },
  { id: "2", title: "Chamaedorea Elegans", price: 1050, stock: 200 },
  { id: "3", title: "Yucca", price: 1050, stock: 0 },
];

const carts: Cart[] = [];

export const db: Db = {
  products,
  carts,
  addToCart: function (input: AddToCartInput): Cart {
    const { productId, customerId, count } = input;

    let cart = carts.find((cart) => cart.customerId == customerId);

    if (!cart) {
      const lastCart = carts[carts.length - 1];

      cart = {
        id: lastCart ? lastCart.id + 1 : 1,
        customerId: customerId,
        cartProducts: new Map(),
      };

      carts.push(cart);
    }

    const savedProductCount = cart!.cartProducts.get(productId) || {
      count: 0,
      productId: input.productId,
    };

    savedProductCount.count += count;

    cart!.cartProducts.set(input.productId, savedProductCount);

    return cart!;
  },
};
