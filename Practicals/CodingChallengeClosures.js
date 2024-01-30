//Create an IFFI

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    // this is a closure
    header.style.color = "blue";
  });
})();
