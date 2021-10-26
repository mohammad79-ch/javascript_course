let getItemNotes = function (){

    let notesJson = localStorage.getItem("notes");

    if (notesJson != null){
       return  JSON.parse(notesJson);
    }

    return [];
}

let removeNote = function (id){
    let findIndexNote = notes.findIndex(function (note){
        return note.id === id;
    });
    if (findIndexNote > -1){
        notes.splice(findIndexNote,1);
    }
}

let toggleCheckbox = function (e,id) {
         notes.map(function (note) {
             if (note.id === id) {
                 note.completed = !note.completed;
             }
         })
}

let generateElementDOM = function (note){
    let noteElement = document.createElement("div");
    let pElement = document.createElement("p");
    let checkbox = document.createElement("input");
    let btn = document.createElement("button");
    
    btn.classList.add("btn","btn-light","btn-sm");



    noteElement.classList.add("p-2","d-flex")
    checkbox.classList.add("m-2")
    checkbox.setAttribute("type","checkbox");
    
    btn.textContent = "X";

    btn.addEventListener("click",function (){
        removeNote(note.id);
        saveNotes();
        renderNote(notes,filters)
    })

    checkbox.addEventListener("change",function (e){
        toggleCheckbox(e,note.id);
        saveNotes();
        renderNote(notes,filters)
    })

    noteElement.appendChild(checkbox);

    pElement.textContent = note.name;

    pElement.appendChild(btn);

    noteElement.appendChild(pElement);

    checkbox.checked = note.completed;

    return info.appendChild(noteElement);
}

let renderNote = function (notes,filters){

    let filteringInfoUsers = notes.filter((note) => {
        let searchByName =  note.name.toUpperCase().includes(filters.searchValue.toUpperCase());
        let hideCompleted = !filters.hideCompleted || !note.completed
        return searchByName && hideCompleted;
    })

    info.innerHTML = "";

    filteringInfoUsers.forEach((note)=>{
        generateElementDOM(note)
    });

    return this;
}

let saveNotes = function (){
    localStorage.setItem("notes",JSON.stringify(notes));
}

let pushNoteToArray = function (e){
    notes.push({
        id : uuidv4(),
        "name": e.target.elements.todo.value,
        completed : false
    })
}