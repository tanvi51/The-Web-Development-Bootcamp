//Refresh page
function refreshPage(){
    location.reload();
}

//For dice 1
var randomNumber1=Math.floor(Math.random()*6);

var randomDice="dice" + randomNumber1 + ".png";

var randomDiceImage1="images/" + randomDice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);


//For dice 2
var randomNumber2=Math.floor(Math.random()*6);

var randomDiceImage2="images/dice" +randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

//Winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!🚩";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}