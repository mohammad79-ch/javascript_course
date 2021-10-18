let notes = getItemNotes();

let info = document.querySelector("#info");

const filters = {
    searchValue : "",

}

renderNote(notes,filters);

document.querySelector("#searchInput").addEventListener("input",function (e){
    filters.searchValue = e.target.value;
    renderNote(notes,filters);
})

document.querySelector("#addToDO").addEventListener("submit",function (e){

    e.preventDefault();

    pushNoteToArray(e);

    saveNotes();

    renderNote(notes,filters)

    e.target.elements.todo.value  = ""
})

document.querySelector("#hide-completed").addEventListener("change",function (e){
    filters.hideCompleted = e.target.checked;
    renderNote(notes,filters)

})
