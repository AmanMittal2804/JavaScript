// Through constructor object is formed in singleton
//Object.create
// rest if we made it through lierals do not form as singleton

const Juser ={
    name : "Hitesh" , 
    age : " 18 "
}
console.log(Juser.name);
// freeze tells no chnages in vlaue in initial object
// Object.freeze(Juser)
Juser.age = " 21 "
console.log(Juser["age"])

console.log(Juser.name);
console.log(Juser["name"]);
//This is how object can be accessed

//How to define symbol in an object

const mysym = Symbol("key1")

const obj2 = {
    [mysym] : "mykey1", // true
    mysym : "mykey2"
}

console.log(obj2["mysym"])
console.log(obj2[mysym])

//Invoke functions in object
Juser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Juser.greeting()) // followed by undefined
console.log(Juser.greeting) //[function(anonymous)]