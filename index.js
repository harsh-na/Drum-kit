var randomNumber1=Math.floor(Math.random()*6+1);
var trys="images/dice"+randomNumber1+".png";
// document.getElementsByClassName("img1").setAttribute("src",trys);
var image1=document.querySelectorAll("img")[0].setAttribute("src",trys);


var randomNumber2=Math.floor(Math.random()*6+1);
var tryss="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",tryss);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1🚀";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2🚀";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="draw🚀";
}
