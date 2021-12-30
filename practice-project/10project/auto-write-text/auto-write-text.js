const text = "In the name of god who's the person that we can trust";

let index = 0;

function autoWriteText(){

    document.body.innerText = text.slice(0,index);

    index++;

    if (index > text.length){
        index = 0;
    }

}

setInterval(autoWriteText,200)