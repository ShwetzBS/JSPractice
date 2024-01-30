const x = function () {
  fetch("https://countries-api-836d.onrender.com/countries/")
    .then(function (fetch_response) {
      console.log(fetch_response); //fetch_respose will be a Response object which is a promise again
      return fetch_response.json(); //This is also a promise hence we have to use then on it
    })
    .then(function (json_data) {
      //json_data is the return value of previous promise
      console.log(json_data[0]); //basically we will et a json object(can be one can be many) here we are accessing the first one
    });
};

//ORRR

const x1 = function () {
  fetch("https://countries-api-836d.onrender.com/countries/")
    .then((fetch_response) => fetch_response.json())
    .then((json_data) => console.log(json_data[0]));
};

x();
x1();
