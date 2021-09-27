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
export const getNumbersFrom1To100 = () => {
  const array = [];
  for(let i = 0;i <= 100;i++) array.push(i);
  return array;
};

export const randerItems =(width) =>{
  if(width>1400) return 3;
  else if(width>990 && width<1400) return 2;
  else return 1;
};

