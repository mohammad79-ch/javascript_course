let TargetLink = document.getElementById("link");

function doScroll(targetId) {
    window.scroll({
        top : document.getElementById(targetId).offsetTop,
        behavior : "smooth"
    })
}

TargetLink.addEventListener("click",(e)=>{
    e.preventDefault()
    let targetId = e.target.getAttribute("href");
    doScroll(targetId);
})