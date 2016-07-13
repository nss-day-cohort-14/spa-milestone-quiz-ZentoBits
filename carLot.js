var CarLot = (function (carLot) {

  carLot.loadInventory = function() {
    var messageRequest = new XMLHttpRequest();
    messageRequest.addEventListener("load", carLot.loadSuccess);
    messageRequest.open("GET", "inventory.json");
    messageRequest.send();
  };

  carLot.loadSuccess = function() {
    var carsJSON = JSON.parse(this.responseText);
    var parsedCars = carsJSON.cars
    carLot.cardBuilder(parsedCars);
    return parsedCars;
  };

  carLot.loadInventory();

  return carLot;
  
})(CarLot || {});