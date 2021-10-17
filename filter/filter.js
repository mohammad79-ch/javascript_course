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
        completed : true
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

const filters = {
    searchValue : "",

}


const addToDO = document.querySelector("#addToDO");
let info = document.querySelector("#info");


let filterInfo = function (users,filters){

      let filteringInfoUsers = users.filter((user)=>{
            let searchByName =  user.name.toUpperCase().includes(filters.searchValue.toUpperCase());
            let hideCompleted = !filters.hideCompleted || !user.completed
          return searchByName && hideCompleted;
      })

    info.innerHTML = "";

    filteringInfoUsers.forEach((user)=>{
        let pElement = document.createElement("p");
        pElement.textContent = user.name;
        info.appendChild(pElement);
    });
}

filterInfo(users,filters);


document.querySelector("#searchInput").addEventListener("input",function (e){
    filters.searchValue = e.target.value;
    filterInfo(users,filters);
})

document.querySelector("#addToDO").addEventListener("submit",function (e){
    e.preventDefault();

    users.push({
        "name": e.target.elements.todo.value,
         completed : false,
    })
    filterInfo(users,filters)
    e.target.elements.todo.value  = ""
})

document.querySelector("#hide-completed").addEventListener("change",function (e){
    filters.hideCompleted = e.target.checked;
    filterInfo(users,filters)

})
