/*
There are three ways (can be more than three) in javascript.one  is with const keyword, one with let keyword and one with var keyword
and you can define a variable more  precisely reserve a space in memory for a specefic variable. 
*/
const accountId = 12344
let accountName = "Arnab Chakraborty"
var accountPassword = 1234
accountCity = "Coochbehar"
let accountStatus
// when you declare a variable but dont initialize it then its value will be undefine

// accountId = 12432 throws an error as variable with const keyword cant be changed
accountName = "Arnab Junjunwala"
accountPassword = 12345
accountCity = "Jalpaiguri"
console.table([accountId,accountName,accountPassword,accountCity,accountStatus])

// dont use var because of function scope problem , prefer to use let
