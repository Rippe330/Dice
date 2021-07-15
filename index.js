var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var change1 = "images/dice" + randomNumber1 + ".png";
var change2 = "images/dice" + randomNumber2 + ".png";
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", change1);
document.querySelector(".img2").setAttribute("src", change2);
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent= "Draw"

} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent= "Player 1 Wins"

} else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent= "Player 2 Wins"
}

//setTimeout(function(){location.reload()}, 500);