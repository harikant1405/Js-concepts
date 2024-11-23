// primitive
/*
string,number,null,undefine,boolean,bigint,symbol
stored as value
 */

// non-primitive

/*
array, object, functions
stored as refrence
 */


// ***************************************

// stack and heap memory

let address = "mediacal college"
let anotherAdd = address;
address = "gate no : 1"

console.log(address);
console.log(anotherAdd);

let userOne = {
    name: "harikant",
    gmail: "hari@test.com"
}

let userTwo = userOne;
userTwo.gmail = "kk@test.com";

console.log(userOne);
console.log(userTwo);
