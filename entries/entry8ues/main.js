var string = "let's explore the neighborhood! ";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();

let changeColorElement = document.getElementById("changeColor");

// Define an array of 5 colors
let colors = ["#FEC0CB", "#cdb4db", "#bdee0fe", "#ede6b2", "#bce9e0"];

function changeBackgroundColor() {
    let randIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randIndex];
}

changeColorElement.addEventListener("click", changeBackgroundColor);

