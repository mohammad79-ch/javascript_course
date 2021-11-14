const req = new XMLHttpRequest();

const local = "US";

const country = document.getElementById("country");

req.addEventListener("readystatechange",(e)=>{
    if (e.target.readyState === 4 && e.target.status === 200){

        let data = JSON.parse(e.target.responseText);

        data.forEach((item)=>{
           country.innerHTML += `
           <li>${item.name.common}</li>
           `
        })

    }
})

req.open("GET","https://restcountries.com/v3.1/all");
req.send();