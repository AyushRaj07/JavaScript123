//Immediately invoked function expressions (IIFE)

(function chai(){ //named iife 
    console.log(`DB CONNECTED`);
})(); //This is how function is immediately executed

//we use iife to remove global scope pollution from function that is global scope declared variables or other declarations

//iife dont know where to end the context so we have to use ; to end the iife function

(() => { //unnamed iife
    console.log(`DB CONNECTED TWO`);
})(); //Arrow function for declaring iife

((name) => { //passing parameters in iife
    console.log(`DB CONNECTED TWO ${name}`);
})('ayush');