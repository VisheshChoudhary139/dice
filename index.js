
var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomDice = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDice;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber2 + ".png";
var randomImageSource1 = "images/" + randomDice1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource1);

if(randomImageSource>randomImageSource1){
    document.querySelector("h1").innerHTML = "Player 1 wins";

}
else if(randomImageSource<randomImageSource1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}