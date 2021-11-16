function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback,secendCall) {
    secendCall();
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput((name)=>{
    alert("Hello " + name);
},()=>{
    alert(name + "Hello");
});