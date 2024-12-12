const accountId="2957"
let accountEmail="ankan@123"
var accountPassword="12345"
accountCity="Kolkata"
let accountName;

//we will not use var because of block scope and funtional scope

console.log(accountId);
console.table([accountName,accountEmail,accountId,accountPassword,accountCity]);


accountEmail="raja@123"
accountPassword="abcd"
accountCity="Mumbai"

console.table([accountName,accountEmail,accountPassword,accountCity]);
