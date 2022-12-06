/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Nikhil Dharmavaram
 */


rhit.counter = 0;


rhit.updateCounter = function () {

};


rhit.main = function () {
	console.log("Ready");
	const buttons = document.querySelectorAll("#counterButtons button");
	buttons.forEach((button) => {
		button.onclick = (event) => {
			const dataAmount = button.dataset.amount;
			const dataIsMultiplication = button.dataset.isMultiplication;
			console.log(`Amount: ${dataAmount} isMult: ${dataIsMultiplication}`);
	});
};

rhit.main();
