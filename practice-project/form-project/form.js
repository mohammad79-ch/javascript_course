const arrows = document.querySelectorAll(".arrow");
const tanks = document.getElementById("tanks");

function animateForm(){

    arrows.forEach((arrow)=>{
        arrow.addEventListener("click",(e)=>{
           const input = arrow.previousElementSibling;
           const parent = input.parentElement;
           const nextForm = parent.nextElementSibling;
            validateInput(input)
           if (input.type === 'text' && validateInput(input)){
                nextSlide(parent,nextForm)
           }

        })
    })

}


function validateInput(input){
    if (input.value.length > 3){
        color(input,"green")
        return true
    }
    color(input,"red")
    return  false
}


function color(element,color){
    return element.style.border = `1px solid ${color}`;
}

function nextSlide(parent,nextform){


}

animateForm();