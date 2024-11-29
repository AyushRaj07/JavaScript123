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
