let notes = getItemNotes();

let info = document.querySelector("#info");

const filters = {
    searchValue : "",
    sortBy : "lastEdited"

}

renderNote(notes,filters);

document.querySelector("#searchInput").addEventListener("input", (e)=>{
    filters.searchValue = e.target.value;
    renderNote(notes,filters);
})

document.querySelector("#addToDO").addEventListener("submit", (e) => {

    e.preventDefault();

    pushNoteToArray(e);

    saveNotes();

    renderNote(notes,filters)

    e.target.elements.todo.value  = ""
})

document.querySelector("#hide-completed").addEventListener("change",(e)=>{
    filters.hideCompleted = e.target.checked;
    renderNote(notes,filters)
})

window.addEventListener('storage', (e)=>{
    if (e.key === "notes"){
       notes = JSON.parse(e.newValue);
       renderNote(notes,filters)
    }
})

document.getElementById("selectSort").addEventListener("change", (e)=>{
    filters.sortBy = e.target.value;
    renderNote(notes,filters)
})
