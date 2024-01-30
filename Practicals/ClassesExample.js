class Bank {
  constructor(loanamount, fullname) {
    this.loanamount = loanamount;
    this.fullname = fullname;
    this.movement = [];
  }

  deposit(value) {
    this.movement.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
}

const obj1 = new Bank(1000000, "Hello");
console.log(this.loanamount); //undefined
obj1.deposit(obj1.loanamount);
obj1.withdraw(obj1.loanamount);
console.log(obj1);
