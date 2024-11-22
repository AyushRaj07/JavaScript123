const a = "ayush"
let b = 1234
var c = "a"
d = 5;


{
    b = 5
    c="c"
}
console.table([a,b,c,d])

"use strict"; //treat all js code as newer version

// console.log("abcd")

let ab = "abcd"

//number conversion
let valNum = Number(ab)
console.log(valNum);

console.log();

//"33" = 33
//"33abc" = NaN
//true = 1; false = 0;

//Boolean conversion

//1 = true; 0 = false
//"" = false
//"abcd"=true

//operations

let str1 = "abcd"
let str2 = " efgh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12 
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

const id = Symbol('123')
const anId = Symbol('123')
console.log(id === anId);

//Stack(primitive) and heap(Non primitive i.e. objects) memory

let name = "abcd"
let anName = name
anName = "efgh"
console.log(anName); // name will not change, only anName changes.

let name1 = {
    a: "abcd",
    b: "efgh"
}

let name2 = name1

name2.a = "vhhd"

console.log(name1);
console.log(name2);

//value will change in both name1 and name2 because they are stored in heap and referenced is assigned to each variable

//String

const namee = "abcd"
const repoCount = 50

console.log(`hello ${namee} and repo is ${repoCount}` );

//maths and numbers

//some numbers functions are toFixed, toPrecision, toLocaleString('en-IN')

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to find random values between 10 and 20

//dates

let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate); //Object

let myCreateDate = new Date(2023, 0, 23)

let myCreateDate1 = new Date(2023, 0, 23, 5, 3)

let myCreateDate2 = new Date("2023-01-24") // us format

let myCreateDate3 = new Date("01-14-2023") // indian format











