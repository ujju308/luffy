document.querySelector(".img-1").addEventListener("click",function(){
makesound();
})
function makesound(){
    var audio = new Audio("luffy.mp3");
    audio.play();
}