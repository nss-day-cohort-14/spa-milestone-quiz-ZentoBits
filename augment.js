var CarLot = (function(iife) {
	var garage = document.getElementById('garage');
	var counter = 0;

	buildCar = function() {
		var cars = getInventory();
		cars.forEach(function (value, i) {
			counter ++;
			garage.innerHTML += `<div class='col-md-4 card' id='car${counter}'>`
								+
								"<h3>" + value.year + " " + value.make +

								"<h4>" + value.model + "</h4>" +

								"</h3>" +
								"<hr>" +

								"<h5>" + "$" + value.price + "</h5>" +

								"<img src=" + value.img + ">" +

								"<p>" + 
								value.description +
								"</p>"
								+
								"</div>";


		});

	var cardStyle = document.getElementsByClassName("card");

		for (var i = 0; i < 3; i++) {
			var carColor = cars[i].color;
			cardStyle[i].style.border = "5px solid";
			cardStyle[i].style.borderColor = carColor;
			cardStyle[i].style.background = "rgba(255, 255, 255, .1)"
		}

	for (var i = 0; i < cardStyle.length; i++) {
		cardStyle[i].addEventListener("click", function(event) {
			var targetClick = event.currentTarget;

			for (i = 0; i < cardStyle.length; i++) {

				if (event.target !== cardStyle[i]) {
					cardStyle[i].style.borderWidth = "5px";

				} else if (event.target === cardStyle[i]) {
					targetClick.style.borderWidth = "8px";

					if (event.target === targetClick) {
						document.getElementById('textBox').focus();
						textBox.addEventListener("keydown", function(press) {
							if (press.keyCode === 13) {
								targetClick.childNodes[5].innerHTML = "";
								targetClick.childNodes[5].innerHTML = textBox.value;
								textBox.value = "";
							}
						});
					}
					
				}
			}
		});								
	};
	}

})(CarLot);