if (!num) {
  deleteItems();
}

function deleteItems() {
  console.log("everything deleted");
}

var num = 10;

//........OUTPUT...........

//everything deleted
// This happens because ! undefined becomes ! false which is = true
