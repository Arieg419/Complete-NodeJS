var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount (account) {
	accounts.push(account);
	return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

// deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount;
}

// withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

// getBalance(account)
function getBalance (account) {
	return account.balance;
}

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);









