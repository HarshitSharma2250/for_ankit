let balance =document.getElementById('balance_print')
function BankAccount(accountNumber,name,type,balance){

this.accountNumber=accountNumber;
this.name=name;
this.type=type;
this.balance=balance;
this.active=true;
}

BankAccount.prototype.deposit=function(amount){
this.balance+=amount;
console.log(`balance is ${this.balance}`)
}
BankAccount.prototype.withdraw=function(amount){
if(this.balance>amount){
    this.balance-=amount
    console.log(`balance is ${this.balance}`)
}
}
BankAccount.prototype.checkBalance=function(){
console.log(`your account balance is ${this.balance}`)
}

BankAccount.prototype.isActive=function(){
return this.active
}

let p1=new BankAccount(1234567,'harshit','saving',1200)
let p2 = new BankAccount(123456789, "ankit", "savings", 1000);
let p3 = new BankAccount(987654321, "rahule", "current", 500);
let p4 = new BankAccount(456789012, "sumit", "savings", 2000);


p1.deposit(20)
p1.withdraw(15)
p1.checkBalance()


p2.deposit(1000)
p2.withdraw(100)


function totalbalance(total){
let Filter=total.filter(ele=>ele.isActive).reduce((a,b)=>a+b.balance,0)
return Filter;
}

let total=[p1,p2,p3,p4]

console.log("total balance of all accounts is  : "+totalbalance(total))

balance_print.textContent="total balance of all accounts is  : "+totalbalance(total)