const accountId=14453
let accountEmail="kush@google.com"
var accountPassword="12345"
accountCity="Bengaluru"

//accountId=2//not allowed
accountEmail="hc@gmail.com"
accountPassword="123"
accountCity="jaipur"
let accountState
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

/*
prefer not to use var because of issue in block scope 
and functional scope
*/