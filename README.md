# Shopee Cart Simulation

## 📌 Project Overview

This is a simple Node.js project that simulates some functionalities of a Shopee shopping cart. It allows users to:

Add items to the cart 🛒

Remove items from the cart (quantity update) 🔄

Delete items from the cart ❌

Calculate total price 💰


## 🛠️ Technologies Used

Node.js - JavaScript runtime

JavaScript (ES6) - Core programming language


## 📂 Project Structure

shopee-cart/ \
│-- src/ \
│   ├── cart.js  # Cart logic \
│   ├── item.js  # Cart item logic \
│   ├── index.js  # Entry point \
│-- package.json \
│-- README.md

## 🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/lsmescolotto/shopee-cart.git \
cd shopee-cart

2️⃣ Install Dependencies

npm install

3️⃣ Run the Project

node src/index.js

## 📌 Features

✅ Add items to the cart \
✅ Remove items from the cart \
✅ Delete items from the cart \
✅ Calculate total cart price \
✅ Display cart summary

## 📜 Example Usage

import * as cartService from "./services/cart.js" \
import createItem from "./services/item.js" \

const cart = []; \ 
const item1 = createItem('Headphones', 100, 2) \

cartService.addItemToCart(cart, item1); \
cartService.removeItemFromCart(cart, item1); \
cartService.displayCart(cart) \
cartService.calculateTotalPrice(cart)


## 📜 License

This project is open-source under the MIT License.