let notes = [];

const filters = {
    searchValue : "",

}

let notesJson = localStorage.getItem("notes");

if (notesJson != null){
    notes = JSON.parse(notesJson);
}


let info = document.querySelector("#info");


let filterInfo = function (notes,filters){

      let filteringInfoUsers = notes.filter((user) => {
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

filterInfo(notes,filters);


document.querySelector("#searchInput").addEventListener("input",function (e){
    filters.searchValue = e.target.value;
    filterInfo(notes,filters);
})

document.querySelector("#addToDO").addEventListener("submit",function (e){
    e.preventDefault();

    notes.push({
        "name": e.target.elements.todo.value,
         completed : false,
    })

    localStorage.setItem("notes",JSON.stringify(notes));

    filterInfo(notes,filters)

    e.target.elements.todo.value  = ""
})

document.querySelector("#hide-completed").addEventListener("change",function (e){
    filters.hideCompleted = e.target.checked;
    filterInfo(notes,filters)

})
