const myArr = [0,1,2,3,4,5]
const newArr = myArr.join()
console.log(newArr)
// , join converts array to string

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2)

// Difference between slice and splice slice do not affect the original array but splice does
// 0,1,2,3,4,5
// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// C [ 0, 4, 5 ]
// [ 1, 2, 3 ]


// Spread Operator
// broken glass example 

const number = [1,2,3,4,5]
const number2 =[6,7,8,9,10]

const sub =[...number,...number2]
console.log(sub);

// ,flat() nested array ko open up krdeta h

console.log(Array.from("Hitesh")) // ['H','i',.....]
console.log(Array.from({name:"hitesh"}))  //[]
//empty object because dosen't know to make array from key or value



