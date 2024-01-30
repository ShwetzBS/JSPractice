const cart = ["show", "garments"];

const createOrder = function (cart) {
  const rand_no = Math.random() * 10;
  if (cart.length === 0) {
    return new Promise(function (resolve, reject) {
      console.log("Cart is empty");
      reject("Empty Cart");
    });
  } else {
    return new Promise(function (resolve, reject) {
      console.log("Order created");
      resolve(rand_no);
    });
  }
};

const createPayment = function (order_id) {
  return new Promise(function (resolve, reject) {
    resolve(order_id);
  });
};

function finishProcess(cart1) {
  createOrder(cart1)
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((err) => console.log(err))

    .then((final_data) => console.log(final_data))

    .catch((err) => console.log(err));
}

finishProcess(cart);
