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
    let aElement = document.createElement("a");
    let checkbox = document.createElement("input");
    let btn = document.createElement("button");
    
    btn.classList.add("btn","btn-light","btn-sm");



    noteElement.classList.add("p-2","d-flex")
    checkbox.classList.add("m-2")
    checkbox.setAttribute("type","checkbox");
    
    btn.textContent = "X";

    btn.addEventListener("click",function (e){
        e.preventDefault();
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

    aElement.textContent = note.name;

    aElement.appendChild(btn);

    aElement.setAttribute("href",`/javascript/filter/edit.html#${note.id}`)

    noteElement.appendChild(aElement);

    checkbox.checked = note.completed;

    return info.appendChild(noteElement);
}

let sortNotes = function (notes,sortBy){
    if (sortBy === "lastEdited"){
        return notes.sort(function (a,b){
            if (a.updated_at < b.updated_at){
                return 1;
            }else if(a.updated_at > b.updated_at){
                return -1
            }else{
                return 0
            }
        })
    }else if(sortBy === "created_at"){
        return notes.sort(function (a,b){
            if (a.created_at < b.created_at){
                return 1
            }else if(a.created_at > b.created_at){
                return -1
            }else {
                return 0
            }
        })
    }else if(sortBy === "alphabet") {
        return notes.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
                return -1
            } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    else{
        return notes;
    }
}

let renderNote = function (notes,filters){
    notes = sortNotes(notes,filters.sortBy)
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

    let timestamp = moment().valueOf()

    notes.push({
        id : uuidv4(),
        "name": e.target.elements.todo.value,
        completed : false,
        "created_at": timestamp,
        "updated_at": timestamp,
    })

}

let generateLastUpdaterd = function (timestamp){
    return `Last updated ${moment(timestamp).fromNow()}`
}

