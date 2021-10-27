let noteId = location.hash.substring(1);

let notes = getItemNotes();

let note = notes.find(function (note){
    return note.id === noteId;
})

if (note === undefined){
    location.assign("/javascript/filter/filter.html")
}

let noteName = document.getElementById("note_name");

noteName.value = note.name;
noteName.addEventListener("input",function (e){
    note.name = e.target.value;
    saveNotes();
})

window.addEventListener("storage",function (e){
  if (e.key === "notes"){
      notes = JSON.parse(e.newValue);

      let note = notes.find(function (note){
          return note.id === noteId;
      })

      if (note === undefined){
          location.assign("/javascript/filter/filter.html")
      }
      let noteName = document.getElementById("note_name");

      noteName.value = note.name;
  }
})