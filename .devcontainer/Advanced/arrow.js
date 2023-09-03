// this shows {} in node and in browser window object is shown

// this can be used only in objects not in functions

const obj1 = {
    name : "aman" ,
    print : function(){
        console.log(`my name is ${this.name}`)
    }
    
}

function chai(){
    console.log(this);
}

// function chai(){
//     let quick = "ride";
//     console.log(this.quick); 
//     console.log(this);
// }

//implicit return one  line arrow function

const addTwo =(num1,num2) => num1+num2

//with {} return key word is required