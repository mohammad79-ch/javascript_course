// const local = "US";
//
// let country = document.getElementById("country");
//
// fetch("https://restcountries.com/v3.1/all").then((res)=>{
//     return res.json();
// }).then((resS)=>{
//     resS.forEach(item =>{
//         console.log(item)
//        country.innerHTML += `<li>${item.continents} _ ${item.cca2}</li>`
//     })
// })

let getDetails = async ()=>{
   let response =  await fetch("http://ip-api.com/json/24.48.0.1")
       if (response.status === 200){
         return response.json()
       }else{
           throw new Error("not found");
       }
}

getDetails().then((res)=>{
    console.log(res.country)
})