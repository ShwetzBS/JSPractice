const movement = [1, 2, 3, 4, 5];

movement.forEach(function (m) {
  if (m < 10) {
    console.log(m * 12);
  } else {
    console.log(m);
  }
});

// forEach internally passes the current element,the index and the array its looping through to the callback function

movement.forEach(function (mov, index, arr) {
  console.log(`The index ${index} contains ${mov} element`);
});
