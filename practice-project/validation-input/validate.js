const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let emailValue = email.value.trim();
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if (emailValue === ""){
        setErrorFor(email,"email input is required")
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'email Not a valid');
    }else
    {
        setSuccessFor(email)
    }

    if (usernameValue === ""){
        setErrorFor(username,"username input is required")
    }else{
        setSuccessFor(username)
    }

    if (passwordValue === ""){
        setErrorFor(password,"password input is required")
    }else{
        setSuccessFor(password)
    }

    if (password2Value === ""){
        setErrorFor(password2,"password2 input is required")
    }else{
        setSuccessFor(password2)
    }

    if (passwordValue !== "" && password2Value !== ""){
        if (passwordValue !== password2Value){
            setErrorFor(password,"'Passwords does not match");
            setErrorFor(password2,"'Passwords does not match");
        }
    }

})


function setErrorFor(input,message) {
    let formControl = input.parentElement;
    formControl.className = "form-control error"
    let small = formControl.querySelector("small");
    small.innerText  = message;
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success"
    let small = formControl.querySelector("small");
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
