// let person = new Promise((resolve,reject)=>{
//
//     let number = 2 * 2 ;
//
//     if (number === 5){
//      resolve("correct")
//     }else{
//         reject("wrong")
//     }
//
// });
//
// person.then(data =>{
//     console.log(data)
// }).catch(e=>{
//     console.log(e)
// })

// second

let result = (num) => new Promise((resolve,reject)=>{
    return typeof num === "number" ? resolve("This is a real number") : reject("This is not a real number");
})

result("5").then((suc)=>{
    console.log(suc)
},(err) =>{
    console.log(err)
})