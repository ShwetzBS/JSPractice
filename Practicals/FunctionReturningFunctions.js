const x = (greetings) => {
  return (name) => console.log(`${greetings} ${name}`);
};

x("Hello")("Mohito");

//...Another way

const check = (greet) => (naming) => console.log(`${greet} ${naming}`);

check("Heya")("Shweta");
