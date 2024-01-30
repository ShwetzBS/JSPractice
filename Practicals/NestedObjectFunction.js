const obj = {
  //destructing the sent object
  call_function: function ({
    time,
    place,
    playArea,
    start,
    isavailable = "Yes", //Giving a default value if not passed
  }) {
    return `This ${time} at ${place} the playarea seems ${playArea} and will start at ${start} and surely is ${isavailable}`;
  },
};

console.log(
  obj.call_function({
    time: 90,
    place: "St Inez",
    playArea: "Not Available",
    start: "20/11",
  })
); //passing an object
