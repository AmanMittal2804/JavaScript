coding = ["js","ts","java","c++","ruby"]

coding.forEach((item,index,arr) => {
   console.log(item,index,arr); 
});

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>{
   return num>4 // when {} is there then return keyword is used
})

console.log(newNums);

