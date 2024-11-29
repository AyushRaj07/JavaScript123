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

//change the value
user.email = "ayush2@gmail.com"

//if we dont want to chnage the value of a object then we can use the freeze 
Object.freeze(user) //we wont be able to change the value of the object

//how to add a function inside a object
user.greeting = function(){
    console.log("hello user");
}

user.greetingtwo = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(user.greeting()); //hello user
console.log(user.greeting); // output - function(anonymous) //this output comes because it is returning the reference and not the function
console.log(user.greetingtwo()); //ouptut - hello user, ayush

//create object by constructor method
const user1 = new Object() //singleton object
const user2 = {} //non singleton object

console.log(user1);

user2.id = "123abc"
user2.name = "abcd"

console.log(user2);

//nested object
const reularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fname: "ayush",
            lname: "kashyap"
        }
    }
}

//hoe to access the value of  nested object
console.log(reularuser.fullname?.userfullname.fname); //we will get the fname 
//we use the ? so that if there is no value for the particular key

//merging the object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} //this will create an object by adding objects inside the object

const obj4 = Object.assign({}, obj1, obj2) //{} - empty object and obj1 and obj2 is source
console.log(obj4);

//we will mostly be using the spread to merge the object

const obj5 = {...obj1, ...obj2}


//from database we will be getting the array of objects

const arr2 = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {

    }
]
//we will be getting the multiple objects from database which are comma separated

//how to access the elements from array of objects
arr2[1].email

//how to get the keys of objects
console.log(Object.keys(user2)); //we will get the array of the keys
console.log(Object.values(user2)); //we will get the array of the values
console.log(Object.entries(user2)); //we will get the array of both the keys and values

console.log(user2.hasOwnProperty('name'));//it will return true // we use this to find whether a key is present in the object or not

//object destructuring - how we retrieve the values from the object

// user2.id // we retrieve value by this way

const {id: idd} = user2

console.log(idd); //we can also change the name of the keys

//API - how we get the values 
//earlier we use to get the value in xml format and now we get in JSON format

// {
//     "name":"ayush",
//     "cname":"JS",
//     "price":"1000"
// }

//sometimes we get api in the format of arrays 

[
    {},
    {},
    {}
]







