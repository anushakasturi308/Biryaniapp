let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();
var header =document.querySelector("h1")
header
header.style.color= "blue"

function getRandonColor()
{
    var letters="01234567879ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeHeaderColor()
{
    colorInput=getRandonColor()
    header.style.color=colorInput;
}
setInterval("changeHeaderColor()",500);