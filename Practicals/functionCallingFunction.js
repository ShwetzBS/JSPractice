const addTax = (rate) => {
  return (value) => {
    const final_rate = value + value * rate;
    console.log(final_rate);
  };
};

const func1 = addTax(23);
func1(890);
