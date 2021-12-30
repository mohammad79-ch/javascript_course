let btn = document.getElementById("popupBtn");

let btnClose = document.getElementById("btnClose");

let popup = document.getElementById("popup")

btn.addEventListener("click",(e)=>{
    e.preventDefault();

    popup.classList.add("active");    // or  popup.classList.toggle("active");


})

btnClose.addEventListener("click",(e)=>{
    e.preventDefault();

    popup.classList.remove("active");
})