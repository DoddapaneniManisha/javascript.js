const bankAccount = {
  _balance: 0, 

 
  set balance(newBalance) {
    if (newBalance >= 0) {
      this._balance = newBalance;
      console.log(`Balance updated: $${newBalance}`);
    } else {
      console.log("Invalid balance input. please Enter your  Balance .");
    }
  },

  get balance() {
    return this._balance;
  }
};

bankAccount.balance = 500; 

console.log(`Current balance: $${bankAccount.balance}`);       
