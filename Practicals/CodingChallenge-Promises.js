const x = function whereAmI(lat, lang) {
  fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`)
    .then((fetch_data) => {
      if (!fetch_data.ok) {
        throw new Error("You are reloading quick");
      }

      return fetch_data.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city} ${data.country}`);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

function printError(message) {
  return err.m;
}

x(52.508, 13.381);
