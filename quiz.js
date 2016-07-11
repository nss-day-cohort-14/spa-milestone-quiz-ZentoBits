var CarLot = (function(iife) {

	function populatePage (inventory) {
		buildCar();
	}

	loadInventory(populatePage);

})(CarLot);