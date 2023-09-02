function Study(){
    console.log("keep learning")
}

console.log(Study) //reference
console.log(Study()) //execution

// [Function: Study]
// keep learning
// undefined

function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("aman") // wont' work
console.log(loginUserMessage("aman")) // will work

