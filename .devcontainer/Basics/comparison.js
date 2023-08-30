console.log(null > 0) //false
console.log(null == 0) // false
console.log(null >= 0) //true

// the equality == and comparison > < <= >= work differently as comparison treats null as 0.

console.log("2" === 2)

const id= Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid) //false