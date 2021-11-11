let req = new XMLHttpRequest();

req.addEventListener("readystatechange" , (e)=>{

    if (e.target.readyState === 4){

        let data = JSON.parse(e.target.responseText);

    }

});

req.open("GET","https://puzzle.mead.io/puzzle");

req.send();
