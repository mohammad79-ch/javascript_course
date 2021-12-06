let inputUser = document.getElementById("inputUser");
let formUser = document.getElementById("formUser");
let situation = document.getElementById("situation");
let centigrade = document.getElementById("centigrade");
let city = document.getElementById("city");


formUser.addEventListener("submit",(e)=>{
    e.preventDefault();

    if (inputUser.value.length > 0){
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputUser.value}&appid=8f2f4a4abf1082143565ebd1bffc7d95`;
        fetch(url).then((data)=>{
        return data.json();
        }).then((res)=>{
            console.log(res)
            city.innerHTML = res.name
            situation.innerHTML = res.weather[0].description
        })
    }

})

