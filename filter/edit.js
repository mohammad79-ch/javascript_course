let last_updated = document.getElementById("last_updated");

let noteId = location.hash.substring(1);

let notes = getItemNotes();

let note = notes.find((note) => {
    return note.id === noteId;
})

last_updated.textContent = generateLastUpdaterd(note.updated_at)

note === undefined ? location.assign("/javascript/filter/filter.html") : ""

let noteName = document.getElementById("note_name");

noteName.value = note.name;
noteName.addEventListener("input", (e) => {
    let timestamp = moment().valueOf()
    note.name = e.target.value;
    note.updated_at =  timestamp
    last_updated.textContent =   generateLastUpdaterd(note.updated_at)
    saveNotes();

})

window.addEventListener("storage", (e) => {
  if (e.key === "notes"){
      notes = JSON.parse(e.newValue);

      let note = notes.find((note) => {
          return note.id === noteId;
      })

      note === undefined ? location.assign("/javascript/filter/filter.html") : "";

      let noteName = document.getElementById("note_name");

      noteName.value = note.name;
      last_updated.textContent =   generateLastUpdaterd(note.updated_at)
  }
})