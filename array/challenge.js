let account = {
    name : "mamad ch",
    expense : [],
    income : [],

    addExpense : function (desc,expense){
        this.expense.push({
            desc : desc,
            expense : expense
        });
    },

    addIncome : function (desc,amount){
        this.income.push({
            desc : desc,
            amount : amount
        })
    },

    getAccountSammary : function (){
       let getTotalExpense = 0;
       let getTotalIncome = 0;
       let getTotalBalance = 0;
       this.expense.forEach(item =>{
           getTotalExpense += item.expense;
       })

        this.income.forEach(item => {
            getTotalIncome += item.amount;
        })

           getTotalBalance = getTotalIncome - getTotalExpense;

        return `${this.name} has $${getTotalIncome} and his expense is $${getTotalExpense} and the balance is $${getTotalBalance}`;
    },

}

account.addExpense("coffee",1000)
account.addExpense("laptop",2900)
account.addIncome("job",5000)
console.log(account.getAccountSammary());