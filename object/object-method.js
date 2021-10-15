let person = {
    name : "Mohammad" ,
    family : "Chenani" ,
    age : 21 ,
    job : "programming" ,
    wallet : 18000,

    fullname : function (){
        return  this.name + " " + this.family;
    },

    shopSomeThing : function (price){
        let status = false;

        if (price <= this.wallet){
             this.wallet -= price;
             status = true;
        }

        return `${status} shopping`;
    },
    getInventory : function (){
        return this.wallet;
    }
}

console.log(person.fullname());
console.log(person.shopSomeThing(5000));
console.log(person.getInventory());