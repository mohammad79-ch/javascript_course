const search = document.getElementById("search");
const content_list = document.querySelector(".content-list");
let tableList = document.getElementById("table_list");


const list = [
    {
        name: "Mohammad",
        family: "Chenani",
        age: 21
    },
    {
        name: "Ali",
        family: "Chenani",
        age: 28
    },
    {
        name: "Fatemeh",
        family: "Chenani",
        age: 25
    },
    {
        name : "Khadijah",
        family : "Chenani",
        age : 23
    },
    {
        name : "Hossain",
        family : "Chenani",
        age : 53
    },
    {
        name : "Zahra",
        family : "Chenani",
        age : 47
    }
];

document.addEventListener("DOMContentLoaded",()=>{

    list.forEach((item)=>{
        tableList.innerHTML += `
           <tr>
           <td>${item.name}</td>
           <td>${item.family}</td>
           <td>${item.age}</td>
           </tr>

        `
    })

})

search.addEventListener("input", (e) => {

    let searchValue = e.target.value;
    tableList.innerHTML = "";
    let filter = list.filter((item)=>{
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    filter.forEach((item)=>{
        tableList.innerHTML += `
           <tr>
           <td>${item.name}</td>
           <td>${item.family}</td>
           <td>${item.age}</td>
           </tr>

        `
    })


});