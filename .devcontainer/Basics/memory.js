// primitive data types are stored in stack a duplication is formed and then value is changed
// non primitive get stored into an object and value gets changed in original value itself.

let user1 ={
    emailID : "mittalaman2804@gmail.com" , 
    profession : "Software Developer"
}

let user2 = user1

user2.emailID = "amanm.is19@bmsce.ac.in"

console.log(user2)
console.log(user1)
