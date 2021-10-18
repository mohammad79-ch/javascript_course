let getItemNotes = function (){

    let notesJson = localStorage.getItem("notes");

    if (notesJson != null){
       return  JSON.parse(notesJson);
    }

    return [];
}

let generateElementDOM = function (user){
    let pElement = document.createElement("p");
    pElement.textContent = user.name;
    return info.appendChild(pElement);
}

let renderNote = function (notes,filters){

    let filteringInfoUsers = notes.filter((user) => {
        let searchByName =  user.name.toUpperCase().includes(filters.searchValue.toUpperCase());
        let hideCompleted = !filters.hideCompleted || !user.completed
        return searchByName && hideCompleted;
    })

    info.innerHTML = "";

    filteringInfoUsers.forEach((user)=>{
        generateElementDOM(user)
    });

    return this;
}

let saveNotes = function (){
    localStorage.setItem("notes",JSON.stringify(notes));
}

let pushNoteToArray = function (e){
    notes.push({
        "name": e.target.elements.todo.value,
        completed : false
    })
}