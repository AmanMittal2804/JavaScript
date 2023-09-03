addone(5) // will run and print
function addone(num){
    return num + 1
}

addtwo(5) // won't run because its been stored as well
const addtwo = function(num){
    return num + 2
}

// 1. namedIIFE 2.unmamedIIFE
(function coffee(name){
    console.log(`I m a ${name}`)
})('aman');

((name)=>{
    console.log(`I m a ${name}`)
})('mittal')

// apply semiclon between two iife