let user = {
    name : "mamad",
    family : "chenani",
    age : 21
}


// let clone = {...user}; // copy all user data to clone

// let clone = {};

// Object.assign(clone,user) // copy all user data to clone object

// let clone = Object.assign({},user); // copy all user data to clone object

// console.log(clone)

function person(detail,career){
    let name = detail.name
    let job = career.job;
    return{
        name,
        job
    }
}


console.log(person({
    name : "mamad"
},{
    job : "progranmmer"
}))