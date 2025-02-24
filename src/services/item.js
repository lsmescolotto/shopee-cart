// casos de uso
// -> criar item com subtotal certo (de acordo com qtd)


const createItem =(name, price, quantity) => {
  return {
    name,
    price, 
    quantity,
    subtotal: () => price * quantity
    };

}

export default createItem;