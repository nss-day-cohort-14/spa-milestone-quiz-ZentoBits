var CarLot = (function (carLot) {

	var garage = document.getElementsByClassName('container').item(0)

	var selected = document.getElementsByClassName('selected')

	// function to build the "card" for each car by looping through the parsed cars
  	carLot.cardBuilder = function(parsedCars) {
    	for (var i = 0; i < parsedCars.length; i++) {
			var newDiv = document.createElement(`div`);

			var content = `
				<h3>${parsedCars[i].make} ${parsedCars[i].year}</h3>
				<h4> ${parsedCars[i].model}</h4>
				<hr>
				<h5>$${parsedCars[i].price}</h5>
				<img src="${parsedCars[i].img}">
				<p class='card'>${parsedCars[i].description}</p>
				`
			newDiv.innerHTML = content;
			// adds the new class to the card
			newDiv.setAttribute('class', `col-md-4 carCard`);
			garage.appendChild(newDiv);

			// grabs the "carCard" class to apply the border/background styling
			var cardStyle = document.getElementsByClassName('carCard');

			cardStyle[i].style.border = "5px solid";
			cardStyle[i].style.borderColor = `${parsedCars[i].color}`
			cardStyle[i].style.background = "rgba(255, 255, 255, .1)"
    }
    	;
    	
		var card = document.getElementsByClassName('carCard');
		carLot.eventListeners(card, parsedCars);
  }

  return carLot;
  
})(CarLot || {});












