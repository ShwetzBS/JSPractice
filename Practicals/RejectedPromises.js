const x1 = function () {
  fetch("https://countries-api-836d.onrender.com/countries/")
    .then((fetch_response) => fetch_response.json())
    .then((json_data) => console.log(json_data[0]))
    .catch((err) => console.log(err.message)); //err is actually an object.So you can access its properties
};
