const myArr = [1,2,3,4,5]
const myH = ["abcd", "wiiwe"]

const myArr2 = new Array(1,2,3,4) //another way to declare an array
console.log(myArr[1]); //way to access an array

//arrays have various prototypes

myArr.push(6)
myArr.push(7)
myArr.pop //removing the element

console.log(myArr);

myArr.unshift(9) //insert element at the beginning
myArr.shift() //removes the first element from the array
console.log(myArr);

console.log(myArr.includes(9)); //false - goves a boolean answer
console.log(myArr.includes(3)); //true

console.log(myArr.indexOf(3)); //2

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); //convert the array into string - 1,2,3,4,5

//slice splice

console.log("A ", myArr); //prints full array - 1,2,3,4,5

const myn = myArr.slice(1,3);
console.log(myn); //prints 2,3 leaving the third element
console.log("B ", myArr); //prints full array

const myn1 = myArr.splice(1,3)
console.log("C ", myArr); //prints array removing the element 2, 3 and  4
console.log(myn1); //prints 2, 3, 4













