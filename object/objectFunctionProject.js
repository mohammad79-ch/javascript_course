let person = {
    name : "محمد" ,
    family : "چنانی" ,
    email : "mamadbosqets@gmail.com" ,
    age : 21 ,
    job : "برنامه نویسی" ,
    intresting : "فوتبال",
    wallet : 5000
}

let product = {
    title : "لباس شنا" ,
    category : "لوازم شخصی" ,
    quantity : 2 ,
    price : 2500 ,
    desc : "بهترین محصول حال حاضر"
}



let chooseProduct = function (person,product){
    let wallet = person.wallet;
    let amount = product.price;
    let quantityUser = 1;
    status = "Failed";

    if (amount <= wallet ) {
        person.wallet -= amount;
        product.quantity -= quantityUser;
        this.status = "successfully";
    }

    return {
        status,
        person,
        product
    }
}


console.log(chooseProduct(person,product))
console.log(chooseProduct(person,product))
console.log(chooseProduct(person,product))





