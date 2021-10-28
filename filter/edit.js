let last_updated = document.getElementById("last_updated");

let noteId = location.hash.substring(1);

let notes = getItemNotes();

let note = notes.find(function (note){
    return note.id === noteId;
})

last_updated.textContent = generateLastUpdaterd(note.updated_at)


if (note === undefined){
    location.assign("/javascript/filter/filter.html")
}

let noteName = document.getElementById("note_name");

noteName.value = note.name;
noteName.addEventListener("input",function (e){
    let timestamp = moment().valueOf()
    note.name = e.target.value;
    note.updated_at =  timestamp
    last_updated.textContent =   generateLastUpdaterd(note.updated_at)
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
      last_updated.textContent =   generateLastUpdaterd(note.updated_at)
  }
})