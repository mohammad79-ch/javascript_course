let users = [
    {
        "name": "Calvin",
        "email": "a.tortor.nunc@auctorvitaealiquet.co.uk",
        "company": "Ante Iaculis Institute",
        completed : false
    },
    {
        "name": "Alexander",
        "email": "mauris.ut@eget.net",
        "company": "Nonummy Ut Corp.",
        completed : false
    },
    {
        "name": "Howard",
        "email": "eu.lacus@dis.ca",
        "company": "Nam Interdum Company",
        completed : false
    },
    {
        "name": "Mallory",
        "email": "metus@estmollis.edu",
        "company": "Erat Nonummy Limited",
        completed : false
    },
    {
        "name": "Jessica",
        "email": "posuere.enim.nisl@molestie.co.uk",
        "company": "Nibh Sit LLP",
        completed : false
    }
];

const addToDO = document.querySelector("#addToDO");
let info = document.querySelector("#info");

let searchValue = "";

let filterInfo = function (users,searchValue){

    let filteringInfoUsers = users.filter((user)=>{
        return user.name.toUpperCase().includes(searchValue.toUpperCase());
    })

    info.innerHTML = "";

    filteringInfoUsers.forEach((user)=>{
        let pElement = document.createElement("p");
        pElement.textContent = user.name;
        info.appendChild(pElement);
    });
}

filterInfo(users,searchValue);


document.querySelector("#searchInput").addEventListener("input",function (e){
    searchValue = e.target.value;
    filterInfo(users,searchValue);
})

document.querySelector("#addToDO").addEventListener("submit",function (e){
    e.preventDefault();

    users.push({
        "name": e.target.elements.todo.value,
         completed : false,
    })

    filterInfo(users,searchValue)

    e.target.elements.todo.value  = ""

})