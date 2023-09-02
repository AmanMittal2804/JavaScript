const bumbleUser = new Object() // singleton object
const bumbleUser2={} // non-singleton object

//Chaining of objects
const game={
    name : "Tetris" ,
    levels : {
        lvl1 : {
            tasks : "flag",
            id : "1423",
            name : "Aman"
        }
    }

}

console.log(game.levels.lvl1.tasks)

//Object.assign use

const obj1 ={a:"1",b:"2"}
const obj2 ={c:"1",d:"2"}
const obj3 ={e:"1",f:"2"}

const obj4 =Object.assign({},obj1,obj2,obj3)
// declaring an empty object shows its the target and rest will get added to it
console.log(obj4)

// Extract keys and values from the objects
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// [ 'a', 'b' ]
// [ '1', '2' ]
// [ [ 'a', '1' ], [ 'b', '2' ] ]

console.log(obj1.hasOwnProperty('isLogged')); // true or false
