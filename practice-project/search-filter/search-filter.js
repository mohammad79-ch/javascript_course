const search = document.getElementById("search");
const content_list = document.querySelector(".content-list");
let tableList = document.getElementById("table_list");
let registerData = document.getElementById("registerData");

let name = document.getElementById("nameInput");
let family = document.getElementById("famlilyInput");
let age = document.getElementById("ageSelect");

let resultNames = getDataFromLocalStorage() ?? [];


document.addEventListener("DOMContentLoaded",()=>{
    if (getDataFromLocalStorage() !== null) {
        shareDataInView(resultNames);
    }

})

function shareDataInView(arrayData) {
    tableList.innerHTML = "";
    arrayData.forEach((item) => {
        tableList.innerHTML += `
           <tr>
           <td>${item.name}</td>
           <td>${item.family}</td>
           <td>${item.age}</td>
           </tr>
        `
    })
}

search.addEventListener("input", (e) => {
    let searchValue = e.target.value;
    tableList.innerHTML = "";
    let filter = resultNames.filter((item)=>{
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    shareDataInView(filter)
});




registerData.addEventListener("click",(e)=>{

    let resultNames = getDataFromLocalStorage() ?? [];

    let nameInput = name.value.trim();
    let familyInput = document.getElementById("famlilyInput").value.trim();
    let ageSelect = document.getElementById("ageSelect").value.trim();

    if (!validateData(nameInput,familyInput,ageSelect)){
        return;
    }

    let arrayDataInput = [];
    resultNames.push({
        name : nameInput,
        family : familyInput,
        age : ageSelect,
    })
    console.log("here")
    localStorage.setItem("names", JSON.stringify(resultNames));

    shareDataInView(resultNames);

    name.value = "";
    family.value = "";

});

function validateData(nameInput, familyInput, ageSelect) {
    let status = true;

    if (nameInput === ""){
      name.classList = "error"
        status = false;
    }else{
        name.classList = "success"
    }

    if (familyInput === ""){
        family.classList = "error"
        status = false;
    }else{
        family.classList = "success"
    }

    if (status){
        shareDataInView(resultNames);
        return status;
    }

    return status;

}

function addToLocalStorage(){

}

function getDataFromLocalStorage(){

    let names = localStorage.getItem("names")

    try {
        return JSON.parse(names)
    }catch (e) {
        return []
    }
}

