const form_todo = document.querySelector("#form-todo");
let input_todo = document.querySelector("#input-todo");
let ul_list_todo = document.querySelector("#ul_list_todo");
let message = document.querySelector("#message");
let notes = [];

ul_list_todo.addEventListener('click',function (e){

    if (e.target.classList.contains('linkToDO')){
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("complete")){
        if (e.target.checked){
            e.target.checkbox = true
            e.target.parentElement.style.color = "green";
            e.target.parentElement.style.textDecoration = "line-through\n"
        }else{
            e.target.checkbox = false;
            e.target.parentElement.style.color = "black";
            e.target.parentElement.style.textDecoration = "none"

        }
    }
})

form_todo.addEventListener('submit',function (e){
    e.preventDefault();

    if (input_todo.value.length > 0){

        let li = createHtmlElement();

        ul_list_todo.appendChild(li);

        showMessage("Added successfully","alert","alert-success");

        resetFocus();
    }
})

function createHtmlElement() {
    let p = document.createElement('p');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("complete");
    p.textContent = "X";
    p.style.color = "red";
    p.classList.add("linkToDO");
    let pText = document.createElement('p');
    pText.textContent = input_todo.value;

    let li = document.createElement("li");
    li.style.display = "flex"
    li.style.justifyContent = "space-between"
    pText.appendChild(checkBox)
    li.appendChild(p);
    li.appendChild(pText);
    return li;
}

function resetFocus() {
    form_todo.reset();
    input_todo.focus()
}

function showMessage(msg,whatClass,color) {
    message.style.display = "block";
    message.textContent = msg;
    message.classList.add(whatClass,color)
    setTimeout(function () {
        message.style.display = "none";
    }, 1000)
}
