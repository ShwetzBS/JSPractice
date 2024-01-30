const restaurant = {
  openingHours: {
    friday: {
      open: 20,
      close: 76,
    },

    saturday: {
      open: 3,
      close: 4,
    },

    sunday: {
      open: 9,
      close: 0,
    },
  },
};

//...............DESTRUCTURING OBJECTS ................

const { openingHours: open_time } = restaurant;
console.log(open_time);
const { friday, saturday } = open_time;
console.log(friday);

const {
  friday: { open, close },
  saturday: { open: opentime, close: closetime },
} = open_time;
console.log(opentime, closetime);

const friday_open = open_time.friday.open;
console.log(friday_open);
