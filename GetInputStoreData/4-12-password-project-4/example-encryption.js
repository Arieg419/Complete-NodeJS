var crypto = require('crypto-js');

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
};
var secretKey = '123abc';

/*
Encrypt. AES is a specific encryption algorithm.
Encrypt only works with strings. Does not know how to work with object. Must convert.
The JSON.stringify() method converts a JavaScript value to a JSON string
*/
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

// Decrypt Message. Returns array of bytes. The JSON.parse() method parses a string as JSON.
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
console.log(decryptedMessage.secretName);

 /*
Concatenating str and object when print results in undefined behavior!!! Example:
console.log("hello" + obj) ==> "hello" [Object object]. We can print separately
to avoid this behavior.
 */
