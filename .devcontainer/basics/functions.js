function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("c");  
}

sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, 7); //10

const result = addTwoNumbers(5,2)
console.log("Result: ", result); // result will be undefined as console.log will not return any value, it only prints

function addTwoNumbers1(number1, number2){
    let result = number1 + number2;
    return result;
}

const result1 = addTwoNumbers1(5,2)
console.log("Result: ", result1); // it will print 7 as the value is returned


function loginUserMessage(username){
    if(username === undefined){ // we can also use !username as undefined is seen as false by the if else block
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ayush"));

function calculateCartPrice(val1, val2, ...num1){ // ...num1 - rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600)); //we can pass any number of vlaues inside the functions using rest operator. it will return in the form of array
//val1 will take 200, val2 will take 400 and rest will be in num1 as rest operator is used

//object inside the function

const user = {
    usernamee: "ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.usernamee} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({ //we can directly pass object inside the function
    usernamee: "ayush",
    price: 399
})

const myNewArray = [200, 400, 100, 600] // we can pass arrays inside the function

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // will print 400
console.log(returnSecondValue([200, 400, 100, 600])); // we can directly pass the array inside the function
