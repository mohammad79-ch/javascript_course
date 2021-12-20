let hr = document.querySelector(".hour"),
    min = document.querySelector(".minute"),
    sec = document.querySelector(".second");

setInterval(()=>{

    let date = new Date();
    hr.innerHTML = date.getHours();
    min.textContent = date.getMinutes();
    sec.textContent = date.getSeconds()

},1000)