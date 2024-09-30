console.log('Project');
var nav = document.querySelector('.navigation');
var line1 = document.querySelector('.hambarger').children[0];
var line2 = document.querySelector('.hambarger').children[1];
var line3 = document.querySelector('.hambarger').children[2];

setInterval(() => {
    if(window.innerWidth <= 750){
        nav.classList.add('phone-navigation');
    }
    if(window.innerWidth > 750){
        nav.classList.remove('phone-navigation');
    }
}, 100);

function hambarger(){
    nav.classList.toggle('nav-slide');
    line1.classList.toggle('line-1');
    line2.classList.toggle('line-2');
    line3.classList.toggle('line-3');
}