var CarLot = (function(iife) {

  var inventory = [];

  iife.addCars = function(acr) {
    inventory.push({car});
  };

  var messageRequest = new XMLHttpRequest();

  messageRequest.open("GET", "inventory.json");

  messageRequest.send();

  messageRequest.addEventListener("error", xhrTransferError);

  messageRequest.addEventListener("load", parseData);

  var counter = 0;

  var garage = document.getElementById("garage");

  iife.getMessageArray = function() {
    return inventory;
  };

function xhrTransferError() {
  // console.log("error", An error occurred while transfering the data);
}
  function parseData(event) {
    inventory = JSON.parse(event.target.responseText).cars;
    inventory.forEach(function(currentCar) {
      var CarCard = "";
      // var originalCar = inventory[currentCar];
      // console.log("originalCar", originalCar);

      counter++;
      CarCard = `<div id="car--${counter}" class="col-md-4">
                  <h3>${currentCar.year} ${currentCar.make} <h4>${currentCar.model}</h4></h3>
                  <hr>
                  <h5>$ ${currentCar.price}</h5>
                  <img src="${currentCar.img}">
                  <p>${currentCar.description}</p>
                </div>`;

      var newDiv = document.createElement("article");
      newDiv.innerHTML = CarCard;
      var newAttr = document.createAttribute("id");
      newAttr.value = `cardWrapper--${counter}`;
      newDiv.setAttributeNode(newAttr);
      garage.appendChild(newDiv);
    });
  }

  return iife;

}(CarLot || {}));
