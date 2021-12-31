let nav = document.getElementById("nav");

let btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.classList.toggle("active");
})