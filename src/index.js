import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

let cart = [];
const wishList = [];

const item1 = createItem("bolinha de gude", 20, 3);
const item2 = createItem("máquina de pipoca", 200, 1)

cartService.addItemToCart(cart, item2)
cartService.addItemToCart(cart, item1)

cartService.addItemToCart(wishList, item1)
// cartService.deleteItemFromCart(cart, item2.name)

cartService.removeItemFromCart(cart, item1)
// cartService.removeItemFromCart(cart, item1)
// cartService.removeItemFromCart(cart, item1)
cartService.displayCart(cart)

cartService.calculateTotalPrice(cart)