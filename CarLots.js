var CarLot = (function(iife) {
	var inventory = [];

	getInventory = function() {
		return inventory;
	};
		
	loadInventory = function(callback) {
		var messageRequest = new XMLHttpRequest();
		messageRequest.open("GET", "inventory.json");
		messageRequest.send();

		messageRequest.addEventListener("load", function() {
			inventory = JSON.parse(this.responseText).cars;
			callback(inventory);
		});
	};

	return iife;

})(CarLot);