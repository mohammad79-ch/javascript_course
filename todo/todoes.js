const form_todo = document.querySelector("#form-todo");
let input_todo = document.querySelector("#input-todo");
let ul_list_todo = document.querySelector("#ul_list_todo");
let message = document.querySelector("#message");

form_todo.addEventListener('submit',function (e){
    e.preventDefault();
    if (input_todo.value.length > 0){


            let li = document.createElement("li");
            li.textContent = input_todo.value;

            ul_list_todo.appendChild(li);

        message.style.display = "block";
        message.textContent =  "Added successfully";

        setTimeout(function (){
            message.style.display = "none";
        },1000)

        form_todo.reset();
        input_todo.focus()

    }
})
