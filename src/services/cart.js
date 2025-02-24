// quais ações meu carrinho pode fazer?
// casos de uso
// -> adicionar item no carrinho
// -> deletar item do carrinho
// -> remover item (diminuir quantidade)
// -> calcular o preço total

const addItemToCart = (userCart, item) => {
  userCart.push(item);
}

const deleteItemFromCart = (userCart, name) => {
  const itemIndex = userCart.findIndex((item) => item.name === name)
  
  if(itemIndex >= 0) {
    userCart.splice(itemIndex, 1)
  }

}

const removeItemFromCart = (userCart, item) => {
  const foundIndex = userCart.findIndex((c) => c.name === item.name)

  if (foundIndex == -1) {
    console.log("item não encontrado")
    return;
  } else  if(userCart[foundIndex].quantity > 1){
    userCart[foundIndex].quantity -=1
    userCart[foundIndex].subtotal = () => userCart[foundIndex].quantity * userCart[foundIndex].price
  } else if(userCart[foundIndex].quantity === 1) {
    deleteItemFromCart(userCart, item.name)
  }
  
}

const calculateTotalPrice = (userCart) => {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(`Shopee cart total: \n 🛍️ ${(result).toFixed(2)}`)

}

const displayCart = (userCart) => {
  console.log("Shopee cart list:")
  userCart.forEach((item, index) => {
    console.log(`${index+1}. ${item.name} - R$ ${(item.price).toFixed(2)} | ${item.quantity} | Subtotal: ${(item.subtotal()).toFixed(2)}`)
  })
}

export {addItemToCart, calculateTotalPrice, deleteItemFromCart, removeItemFromCart, displayCart}