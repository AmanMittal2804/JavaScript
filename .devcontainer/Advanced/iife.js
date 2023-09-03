function chai(){
    console.log(`DB connected`)
};
chai();

// if want to immediately invoke 

(function chai2(){
    console.log(`DB connected2`)
})() ;
// ; runcode explicitly
// Global scope ke pollution se hoti h dikkat kayi baar usko hatane ke liye hmne ye use kiya

// 1. namedIIFE 2.unmamedIIFE
(function coffee(name){
    console.log(`I m a ${name}`)
})('aman');

((name)=>{
    console.log(`I m a ${name}`)
})('mittal')