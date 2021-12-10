const slideCarouel = document.querySelector(".image-slider");
const sliderImages = document.querySelectorAll(".image-slider img");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let counter = 1;
let size = sliderImages[0].clientWidth;

// slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';

nextBtn.addEventListener("click",(e)=>{
    if (counter >= sliderImages.length - 1)return
    slideCarouel.style.transition = 'transform 0.4s ease-in-out'
    counter++
    slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})

prevBtn.addEventListener("click",(e)=>{
    if (counter <=0)return
    slideCarouel.style.transition = 'transform 0.4s ease-in-out'
    counter--
    slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})

slideCarouel.addEventListener("transitionend",()=>{

    if (sliderImages[counter].id === 'lastClone'){
        slideCarouel.style.transition = 'none'
        counter = sliderImages.length - 2
        slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
    }

    if (sliderImages[counter].id === 'firstClone'){
        slideCarouel.style.transition = 'none'
        counter = sliderImages.length - counter
        slideCarouel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
    }

})
