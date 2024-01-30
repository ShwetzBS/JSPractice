const data = [8, 90, 89, 78, 67];

//Find method basically returns the first element of the array that satisfies the condition passed
//The difference between filter and find is that filter method returns all the elements which satisfy the condition and it's a new array altogether
const satisfied_value = data.find((x) => x > 10);

console.log(satisfied_value);
