const slideCarouel = document.querySelector(".image-slider");
const sliderImages = document.querySelectorAll(".image-slider img");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let counter = 0;
let size = sliderImages[0].clientWidth;

// slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';

nextBtn.addEventListener("click",(e)=> {
    if (counter >= sliderImages.length - 1) {
        counter = 0
    }else {
        counter++
    }
    slideCarouel.style.transition = 'transform 0.4s ease-in-out'
    slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})

prevBtn.addEventListener("click",(e)=>{
    if (counter <=0){
        counter = sliderImages.length - 1
    }else {
    counter--
    }
    slideCarouel.style.transition = 'transform 0.4s ease-in-out'
    slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})
