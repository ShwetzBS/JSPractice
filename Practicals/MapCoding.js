const text = ["Shweta Bhat", "Mohit Bidikar", "Tanay Amonkar"];
const usernameArray = text.map(function (element) {
  let splitText = element.split(" ");
  console.log(splitText);
  let finalInitials = "";
  for (let i = 0; i < splitText.length; i++) {
    finalInitials = finalInitials + splitText[i].charAt(0).toLowerCase();
  }
  return finalInitials;
});
console.log(usernameArray);
