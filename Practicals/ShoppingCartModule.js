const x = 20;
const cart = [];

const func = function (product, quantity) {
  //basically Im making this function public
  cart.push(product);
  console.log(cart);
  console.log(`${product} ${quantity} added`);
};

export { func };
