var CarLot = (function (carLot) {

	carLot.eventListeners = function(card, parsedCars) {
		for (var i = 0; i < card.length; i++) {
			var currentCard = card.item(i);

			currentCard.addEventListener("click", function(){
				var clearSelected = document.getElementsByClassName('selected')

				for (var i = 0; i < clearSelected.length; i++) {
					clearSelected[i].classList.remove('selected');
				}
				this.classList.add('selected'); // add selected class to clicked item
				var textBox = document.getElementById('textBox')
				textBox.focus();
			});
		}
		var textBox = document.getElementById('textBox')

		textBox.addEventListener("keyup", function(key) {
			var cardSelect = document.getElementsByClassName('selected').item(0);
			var description = cardSelect.getElementsByClassName('card').item(0)
			description.innerText = textBox.value;
		})

	}

	return carLot

})(CarLot || {});











