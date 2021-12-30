let btn = document.getElementById("btn");
let toastPosition = document.getElementById("toast-position");


btn.addEventListener("click",()=>{

    let toast = document.createElement("div");

    toast.classList.add("toast_box");

    toast.innerHTML = "This is notification for nothing";

    toastPosition.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000)
})