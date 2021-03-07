window.addEventListener('scroll',function()  {myFunction()});
let header = document.querySelector('header');
let links = document.querySelectorAll('.nav-link');

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor="#F7F7F7";
        links.forEach(link => {
            link.style.color="#333";
        });
    } else {
        header.style.backgroundColor="rgba(51, 51, 51, 0)";
        links.forEach(link => {
            link.style.color="#fff";
        });
    }
}
//start slide team
var diver  = document.querySelectorAll('.diver'),
    l = 0;
function MoveTeam(){
    diver.forEach(r => {
        if(l==0){r.style.left= "0px";}
        if(l==1){r.style.left= "-40%";}
        if(l==2){r.style.left= "-80%";}
        if(l==3){r.style.left= "-90%";}
        if(l==4){r.style.left= "-160%";}
        if(l==5){r.style.left= "-300%";}
        if(l==6){r.style.left= "-400%";}
        if(l==7){r.style.left= "-580%";}
        if(l==8){r.style.left= "-600%";}
        if(l==9){r.style.left= "-760%";}
        if(l==10){r.style.left= "-860%";}
        if(l==11){r.style.left= "-930%";}
        if(l>11){l=11;}
    });
}
//end slide team
//start show popupteam
var taemItems =document.querySelectorAll('.taem-item');
var closePopUPs =document.querySelector('.closePopUP');
var POPUP = document.querySelector('.POPUP');
taemItems.forEach(taemItem => {
    taemItem.addEventListener('click' , function(){
        taemItem.firstElementChild.classList.toggle('d-block');
    })
});

//end sshow popupteam
