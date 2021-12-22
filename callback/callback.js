// function greeting(name) {
//     alert('Hello ' + name);
// }
//
// function processUserInput(callback,secendCall) {
//     secendCall();
//     var name = prompt( 'Please enter your name.');
//     callback(name);
// }
//
// processUserInput((name)=>{
//     alert("Hello " + name);
// },()=>{
//     alert(name + "Hello");
// });
//
// const getDataCallback = (callback) => {
//     setTimeout(()=>{
//         callback(undefined,"This is the data");
//     })
// }
//
// getDataCallback((err,data) => {
//     console.log(err,data)
// })



// start callback ****************

// console.log("start")
//
//  async function person(name,age,callback){
//     setTimeout(()=>{
//          callback([name,age])
//     },2000)
// }


// let person1 = person("mamad",21,(user)=>{
// console.log(user)
// });

// console.log("end")

// end callback **********************


 function person(name,age){
    return new Promise((resolve => {
        setTimeout(()=>{
            resolve([name,age]);
        },2000)
    }))
}

async function doSomthing(){
    let user = await person("mamad",21);
    console.log(user)
}

doSomthing()