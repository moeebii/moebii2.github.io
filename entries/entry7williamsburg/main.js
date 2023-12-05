let title = document.getElementById("title");

// Define an array of 5 colors
let colors = ["#EFCFD4", "#1D2951", "#008080", "#ffd937", "black"];

function changeBackgroundColor() {
    let randIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randIndex];
}

title.addEventListener("click", changeBackgroundColor);


