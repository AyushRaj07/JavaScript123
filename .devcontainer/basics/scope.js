// scope is curly braces {}

let a  = 300

if(true){ //inside braces its block scope and rest is global scope
    let a = 10
    const b = 20
    var c = 30
    console.log(a); //will print 10
    
}

console.log(a); //can't be accessed outside the if else block //will print 300 not 10
console.log(b); //can't be accessed outside the if else block
console.log(c); //it can be accessed and it will print 30

function one(){
    const username = "hitesh" 

    function two(){
        const website = "youtube"
        console.log(username); //will print hitesh
    }
    console.log(website); //will give error
    
    two(); //hitesh
}

one() //it is executed first and then two is executed

if(true){
    const usernamee = "ayush"
    if(usernamee === "ayush"){
        const website = "youtube"
        console.log(usernamee + website);
    }
    console.log(website); //will throw error as it is out of scope
}
console.log(usernamee); //will throw error as it is out of scope

//concept -- techniqes to make a function

addOne(5) //if we call the below function before declaring the function then it will not give any error
function addOne(num){
    return num + 1
}

addOne(5)

//Function declared in other way

addTwo(5) //if we call the function before declaring the function then it will throw error as the function has been hold into a variable
const addTwo = function(num){
    return num + 2
}

addTwo(5)

//This concept is called hoisting

