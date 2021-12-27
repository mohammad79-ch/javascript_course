const search = document.getElementById("search");
const content_list = document.querySelector(".content-list");
let tableList = document.getElementById("table_list");
let registerData = document.getElementById("registerData");


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

function shareDataInView() {
    list.forEach((item) => {
        tableList.innerHTML += `
           <tr>
           <td>${item.name}</td>
           <td>${item.family}</td>
           <td>${item.age}</td>
           </tr>
        `
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    shareDataInView();
})

search.addEventListener("input", (e) => {
    let searchValue = e.target.value;
    tableList.innerHTML = "";
    let filter = list.filter((item)=>{
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

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




registerData.addEventListener("click",(e)=>{
    let nameInput = document.getElementById("nameInput").value.trim();
    let familyInput = document.getElementById("famlilyInput").value.trim();
    let ageSelect = document.getElementById("ageSelect").value.trim();

    validateData(nameInput,familyInput,ageSelect);

});


function validateData(nameInput, familyInput, ageSelect) {
    if (nameInput === ""){
      alert("here i")
    }

    if (familyInput === ""){
      alert("here f")
    }


}

