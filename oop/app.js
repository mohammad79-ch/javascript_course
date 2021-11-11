// const person = {
//    get location(){
//         return this._location;
//     },
//     set location(value){
//       this._location = value.trim()
//     }
// }
// person.location = "here";
// console.log(person.location);

class Person {

    constructor(name,family) {
        this.name = name;
        this.family = family;
    }

    getFullName() {
     return  `${this.name} ${this.family}`;
    }

}

// const person = new Person("Mohammad","Chenani");

// console.log(person.getFullName())

class Child extends Person {

    Aname(){
       return super.getFullName() + "hehehehehhehe";
    }

}

const child = new Child("Ali","Cnc");

console.log(child.Aname())

