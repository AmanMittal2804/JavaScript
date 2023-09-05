// array specific loop

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

// in map no duplicates

const mp = new Map
mp.set('1',"aman")
mp.set('2',"aman")

console.log(mp)

for(const [key,value] of mp){
    console.log(key,':-',value);
}

// for in loop works for object

const obj={
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby" ,
    swift : "swift by apple"
}

for (const key in obj){
    console.log(obj[key]);
}