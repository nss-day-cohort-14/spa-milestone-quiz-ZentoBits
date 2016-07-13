var CarLot = (function (carLot) {

  // function to load the inventory.json
  carLot.loadInventory = function() {
    var messageRequest = new XMLHttpRequest();
    messageRequest.addEventListener("load", carLot.loadSuccess);
    messageRequest.open("GET", "inventory.json");
    messageRequest.send();
  };

  // after succsessful load, parses the json and returns the parsed cars
  carLot.loadSuccess = function() {
    var carsJSON = JSON.parse(this.responseText);
    var parsedCars = carsJSON.cars
    carLot.cardBuilder(parsedCars);
    return parsedCars;
  };

  carLot.loadInventory();

  return carLot;
  
})(CarLot || {});