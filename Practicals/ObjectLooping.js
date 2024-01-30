const restaurant = {
  openingHours: {
    thu: {
      open: 24,
      close: 78,
    },
    fri: {
      open: 23,
      close: 12,
    },

    sat: {
      open: 21,
      close: 32,
    },
  },
};

for (day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr = `We are open for a total of ${properties.length} days:`;

for (const s of properties) {
  openStr += ` ${s}, `;
}
console.log(openStr);

//Object.entries -Loop over entire object

const ObjEntries = Object.entries(restaurant.openingHours);
console.log(ObjEntries);

for (const [x, { open: key, close: value }] of ObjEntries) {
  console.log(`On ${x} we are open at ${key} and closed at ${value}`);
}
