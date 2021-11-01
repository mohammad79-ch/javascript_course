const person = (age) => {
    if (typeof age === "integer") {
        if (age > 18) {
            return `Your age ${age} and is available to vote`;
        } else {
            throw Error(`Your age is ${age} and less then legal age that government crossed`);
        }
    } else {
        throw Error(`Your input is invalid`);
    }
}

try {
    let result = person(20);
    console.log(result)
} catch (e) {
    console.log(e.message)
}