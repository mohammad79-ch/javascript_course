let image = document.getElementById("images");
let images = document.querySelectorAll("#images img");
console.log(images)
let index = 0;

function run() {
    index++;
    if (index > images.length - 1) {
        index = 0
    }

    image.style.transform = `translateX(${-index * 511}px)`;

}

setInterval(run, 2000)