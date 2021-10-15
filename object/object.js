
// let name = "mamad";

// let person = {
//     [name + "Chenani"] : "ali",
// }

let person = {
   name : "ali",
}

// delete person.name


console.log(person.name)

let num = {
    width : 290,
    height : 460,
    title : "studycode-ir"
}

function result(obj){
    let number2 = 2;
    for (let objKey in obj) {
         if (typeof obj[objKey] == "number"){
             obj[objKey] *= number2;
         }
    }

    return obj
}

console.log(result(num))