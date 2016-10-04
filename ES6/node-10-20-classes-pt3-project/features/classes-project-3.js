class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	set balance (val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}
	get balance () {
		return this._balance;
	}
	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	withdrawal (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	printBalance () {
		console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdatedAt}.`);
	}
}

// SavingsAccount class that extends BankAccount
// Override withdrawal to print message that you can't
// Override deposit to print message call partent deposit method

class SavingsAccount extends BankAccount {
	deposit (amount) {
		if (super.deposit(amount)) {
			console.log(`Congratz! You saved $${amount}`);
		}
	}
	withdrawal () {
		console.log('You are not able to remove funds from your savings account');
	}
}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawal(25);
savingsAccount.printBalance();