export const countBasket = (basket) => {
  let total = 0;
  for (let element of basket) {
    total = total + element.price;
  }
  return total;
};
