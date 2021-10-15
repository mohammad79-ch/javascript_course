// function User(){
//   this.name = "mamad"
//
//     return;
// }
//
//
// console.log(new User().name)

let user = null;

console.log( user?.address ); // undefined
console.log( user?.address.street ); // undefined

// ?.  this allow us run the unExists method or property without error buy show us the undefined