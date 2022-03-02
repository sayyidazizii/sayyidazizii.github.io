const right = document.getElementById('right');
const left = document.getElementById('left');
const carousel = document.querySelector('.carousel');

let counter = 650;
right.addEventListener('click',()=>{
    if(counter === 1950){
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter}px)`;
    counter = counter + 650;
});

var counterBack;
left.addEventListener('click', ()=>{
    if(counter === 650){
        counterBack = -1300;
        counter = 1950;
    }
    else if(counter === 1300){
        counterBack = 0;
        counter = 650;
    }else if(counter === 1950){
        counterBack = -650;
        counter = 1300;
    }
    carousel.style.transform = `translateX(${counterBack}px)`;
});
