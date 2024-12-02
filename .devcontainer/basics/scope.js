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
