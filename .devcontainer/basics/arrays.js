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

console.log(myArr.includes(9)); //false - gives a boolean answer
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

//pushing an array in an array

const m_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

m_heros.push(dc_heros)
 console.log(m_heros); // it will print the dc_heros arrays inside the m_heros arrays as an element
 //output - ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

 const allheros = m_heros.concat(dc_heros)
 console.log(allheros); //it will actually merge all the elements of the both the arrays
  //output - ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

  //spread operator

  const all_hero = [...m_heros, ...dc_heros]
  console.log(all_hero); // it will also print the array by merging the elment of the both the array
  //output - ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

  //to merge different dimensions of same array into one

  const an_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
  const re_an_arr = an_arr.flat(Infinity) //in bracket we give the dimension up to which we want the array convert into a single one
  console.log(re_an_arr); //[1,2,3,4,5,6,7,6,7,4,5]

  //converting a differnt format of data into an array 

  console.log(Array.isArray("ayush"));//false
  console.log(Array.from("ayush")); // it will convert the values into an array - ['a', 'y', 'u', 's', 'h']
  
  //interesting case
  console.log(Array.from({name: "ayush"})); //in this case it will not convert into array
  //beacause it doesnt know what to convert that whether the key should be converted or the value

  let score1 = 100
  let score2 = 200
  let score3 = 300
   
  console.log(Array.of(score1, score2, score3)); // output - [100, 200, 300]
  
  
  
  

 











