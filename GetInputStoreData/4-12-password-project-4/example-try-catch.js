function doWork () {
	// throw error that say 'unable to do work'
	throw new Error('Unable to do work!');
}

// everything here is run normally.
try {
	// call do work
	doWork();
} catch (e) { // catch is only run if err occurs during runtime.
	console.log(e.message);
} finally { // finally is always run. regardless of error or not.
	console.log('Finally block executed!');
}

console.log('try catch ended');
