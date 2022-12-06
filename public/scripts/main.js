/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Nikhil Dharmavaram
 */

var rhit = rhit || {};
rhit.counter = 0;


rhit.updateCounter = function (amount, isMultiplication) {
	if (isMultiplication) {
		rhit.counter *= amount;
	}
	else {
		rhit.counter += amount;
	}
	document.querySelector("#counterText").innerHTML = `Count = ${rhit.counter}`;
	
};


rhit.main = function () {
	console.log("Ready");
	const buttons = document.querySelectorAll("#counterButtons button");
	for (const button of buttons){
	 	button.onclick = (event) => {
	 		const dataAmount = parseInt(button.dataset.amount);
	 		const dataIsMultiplication = button.dataset.isMultiplication == "true";
	 		rhit.updateCounter(dataAmount, dataIsMultiplication);
	 	}
	 }
	
};

rhit.main();
