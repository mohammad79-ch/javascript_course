let registerForm = document.getElementById("register");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password")
let users = document.getElementById("users");
let tbodyTable = document.getElementById("tbodyTable");
let search = document.getElementById("search");



let getUsersFromLccalStorage = () => {
    let usersAll = localStorage.getItem("users")

    try {
        return JSON.parse(usersAll)
    }catch (e) {
        return []
    }
}

let usersArray = getUsersFromLccalStorage();

let validateInput = () => {

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let status = true;

    if (nameInput.value.length <= 0){
        nameInput.style.border = "1px solid red";
        status = false;
    }else{
        nameInput.style.border = null;
    }

    if (emailInput.value.length <= 0 || !re.test(emailInput.value)){
        emailInput.style.border = "1px solid red";
        status = false;
    }else{
        emailInput.style.border = null;
    }

    if (passwordInput.value.length <= 0){
        passwordInput.style.border = "1px solid red";
        status = false;
    }else{
        passwordInput.style.border = null;
    }

    return status;
}

registerForm.addEventListener("submit",(e) => {
    tbodyTable.innerHTML = "";
    e.preventDefault();

    if (!validateInput()){
        return;
    }

   usersArray = usersArray ?? [];

    usersArray.push({
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    })

    localStorage.setItem("users",JSON.stringify(usersArray));

    renderUsers(search.value)


})

let renderUsers = (searcher) => {

    let getUsers = getUsersFromLccalStorage();

    if (getUsers !== null){

        if (searcher){
          tbodyTable.textContent = "";
         getUsers = getUsers.filter((user)=>{
             return user.name.toUpperCase().includes(searcher.toUpperCase());
         })

        }

        getUsers.forEach(item =>{
            let tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
        `
            tbodyTable.appendChild(tr);
        })
    }
}

window.addEventListener("DOMContentLoaded",(e)=>{
    renderUsers(search.value);
})

search.addEventListener("input",(e)=>{
  renderUsers(search.value)
})








