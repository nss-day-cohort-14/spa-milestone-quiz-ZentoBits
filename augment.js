var CarLot = (function (carLot) {

	var garage = document.getElementsByClassName('container').item(0)



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
			newDiv.setAttribute('class', `col-md-4 carCard`);
			garage.appendChild(newDiv);

			var cardStyle = document.getElementsByClassName('carCard');

			cardStyle[i].style.border = "5px solid";
			cardStyle[i].style.borderColor = `${parsedCars[i].color}`
			cardStyle[i].style.background = "rgba(255, 255, 255, .1)"
    }
		var card = document.getElementsByClassName('carCard');
		carLot.eventListeners(card, parsedCars);
  }

  return carLot;
  
})(CarLot || {});












