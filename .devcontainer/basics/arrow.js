const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); //will print current context with ayush once and then with sam
        
    }
}

user.welcomeMessage() //will print -- ayush, welcome to the website
user.username = "sam" //here we change the context
user.welcomeMessage() //here it will print -- sam, welcome to the website

console.log(this); //this will print {} as there is no context in the global area

//if we print console.log(this) in the browser then it will print window object

function chai(){
    let username = "hitesh"
    console.log(this); //this will print various different type of values that is in the function
    console.log(this.username); //this will print undefined as this only works in the objects
}

chai()

//another way to declare functions

const chai = function(){
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
}

//this can we changed to arrow function

const chaii = () => {
    let username = "hitesh"
    console.log(this); //this will print empty object {}
}

//basic arrow function

const addTwoo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoo(3,7));

//arrow function with implicit return

const addTw = (num1, num2) => (num1 + num2) //if we have only return statement i.e explicit return

//if we write curly braces then we have to write return statement but in parenthesis we dont have to

const addToo = (num1, num2) => ({username: "ayush"})
console.log(addToo());//will print object only if it is wrapped inside the parenthesis
