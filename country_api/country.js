const req = new XMLHttpRequest();
const local = "US";
req.addEventListener("readystatechange",(e)=>{
    if (e.target.readyState === 4 && e.target.status === 200){
        let data = JSON.parse(e.target.responseText);

        data.forEach((item)=>{
            if (item.cca2 == local){
                console.log(item.name.common + " " + item.cca2 )
            }
        })

    }
})


req.open("GET","https://restcountries.com/v3.1/all");
req.send();