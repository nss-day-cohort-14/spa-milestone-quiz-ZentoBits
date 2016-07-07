var CarLot = (function(iife) {

	var targetCard = ;
	console.log(targetCard);

	targetCard.addEventListener("click", cardClick);

	function cardClick() {
		console.log("hello");
	}



}(CarLot || {}));
