for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    makeSound(this.innerHTML);
    addAnimation(this.innerHTML);
    //this.style.color="yellow";
    
  };
}
document.addEventListener("keydown",function(event){
 makeSound(event.key)
 addAnimation(event.key)
}); 

function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/tom-5.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/tom-6.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/tom-7.mp3");
      audio.play();
    default:
      console.log(this.innerHTML)

  }
}
function addAnimation(currentkey){
var activebutton=document.querySelector("."+currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed")
},500)
}

                                 