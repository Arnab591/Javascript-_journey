let number = 33
console.log(number)
numberinStr = String (number);
console.log(numberinStr);
console.log(typeof numberinStr)
// String() or Number() are some method to convert the datatypes
let numberstr = "33abc"
// 33abc string to number converts but this will give NaN --> not a number
numberinInt = Number (numberstr)
console.log(numberinInt);
console.log(typeof numberinInt) 
// the following string not convert to number but the type shows it will be a number
// same we can do with boolean also

//*****************Stack and Heap memeory in javascript*******************/

let EmailId = "Arnab@gmail.com"
UserEmail = EmailId // just  copy of that variable does not change the original value
UserEmail = "nandy@gmail.com" 
console.log(UserEmail);
console.log(EmailId);
// conclusion--> in stack memory, memory for primitive datatypes are stored

// story of heap memory
// memory for  non primitive datatypes {Array,Objects} will store in heap memory 


let myobj1 = {
    email : "javascript@gmail.com" ,
    UserID : 12344
}
let myobj2 = myobj1 
myobj2.email = "Archanabakshi@1213" // change in any value of reference object will change the content of original object as it points to the same heap memory contents 
console.log(myobj1.email);

// for more details and diagram visit : https://excalidraw.com/#json=tBSh77IruSokiWkkW-GrH,P4pLSuYmi5fL7LWEPdHDLg



