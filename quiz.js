var CarLot = (function (carLot) {

	// function for calling the event listeners for the "click" and "key" events
	carLot.eventListeners = function(card, parsedCars) {
		for (var i = 0; i < card.length; i++) {
			var currentCard = card.item(i);

			// click event listener that appends the class "selected" when clicked and removes the class from cards that werent the target of the click
			currentCard.addEventListener("click", function(){
				var clearSelected = document.getElementsByClassName('selected')
				for (var i = 0; i < clearSelected.length; i++) {
					clearSelected[i].classList.remove('selected');
				}
				//focuses text box upon click and clears any previous text
				this.classList.add('selected');
				var textBox = document.getElementById('textBox')
				textBox.focus();
				textBox.value = "";

				// function to target the class name of the current card to apply the border width I need
				function hasClass(element, cls) {
    				return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
				}

				if (hasClass(this, "selected")) {
					for (var i = 0; i < card.length; i++) {
						card[i].style.borderWidth = "5px";
					}
					this.style.borderWidth = "8px";
				}

			});
		}
		var textBox = document.getElementById('textBox')

		// keyup event listener to "live update" the targeted "p" tag in the card as you type
		textBox.addEventListener("keyup", function(key) {
			var cardSelect = document.getElementsByClassName('selected').item(0);
			var description = cardSelect.getElementsByClassName('card').item(0)
			description.innerText = textBox.value;
		})

	}

	return carLot

})(CarLot || {});











