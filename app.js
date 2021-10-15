// let btn = document.getElementById("btn_click");
// let note = document.getElementById("note");
// let box_notes = document.getElementById("box_notes");
// let ul = document.createElement('ul');
//
// btn.addEventListener('click', validateNote)
//
// function validateNote(e) {
//
//     if (note.value != "" && note.value.length > 2) {
//         addToList();
//         note.style.border = "1px solid black";
//         note.value = "";
//         note.focus()
//         return;
//     }
//
//     note.style.border = "1px solid red";
//
// }
//
//
// function addToList() {
//
//     let li = document.createElement('li');
//     let link = document.createElement('a');
//     let para = document.createElement('p');
//
//     link.classList.add('link')
//
//     link.onclick = remove;
//
//     li.classList.add('flex');
//
//     link.textContent = "X";
//     link.style.color = "red";
//     para.textContent = note.value
//
//     li.appendChild(para);
//     li.appendChild(link);
//
//     li.setAttribute('data-id', ul.childElementCount)
//
//     ul.appendChild(li);
//
//     box_notes.appendChild(ul);
// }
//
//
// function remove(e) {
//     e.preventDefault();
//     e.target.parentElement.remove();
// }

// new things
// let age = 23;
// (age > 22) ? alert("More 19") : (age < 20) ? alert('Less 19') : alert('other');

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
});
