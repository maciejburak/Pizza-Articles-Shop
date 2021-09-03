export const countBasket = (basket) => {
  let total = 0;
  for (let element of basket) {
    total = total + element.price;
  }
  return total;
};

export const filterProducts = (products, productKind) => {
  const filteredArray = [];
  for (let product of products) {
    if (product.type === productKind) filteredArray.push(product);
  }
  return filteredArray;
};
