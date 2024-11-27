// methods to create object

//by constructor method
Object.create

//way to declare a symbol and use it inside the object
const mySym = Symbol("key1")

//object literal
const user = {
    name: "ayush",
    "full name": "ayush kashyap", // we cant access this by using the dot operator
    age: "4",
    [mySym]:"mykey1", //to use symbol inside the object we have to declare the name of the symbol inside the object
    location: "delhi",
    email: "ayush@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monaday", "Saturday"]
}

console.log(user.email);
console.log(user["email"]) //another way to access the elments of the objects
console.log(user["full name"]); //keys given as string cant be accessed using dot operator
console.log(user[mySym]); // the data type of this will be symbol




