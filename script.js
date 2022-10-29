
var colorCode = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.querySelector('#body');


const colorInput = () => {
	 body.style.background = "linear-gradient(to right," + color1.value + "," +  color2.value + ")";
	colorCode.textContent = body.style.background + ";";
};


color1.addEventListener('input', colorInput);

color2.addEventListener('input', colorInput);


// if (length === 1) {
// 	console.log('length is 1');
// } else {
// 	console.log('length is 0');
// }


// //Tenary operator

// length === 1 ? console.log('length is 1') : console.log('length is 0');

