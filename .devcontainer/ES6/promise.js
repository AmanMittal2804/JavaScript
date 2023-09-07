const promise  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
          resolve({username : "aman" , password : "1234"})
        } else {
          reject('Error is occured')
        }
    },1000)
})
.then((user)=>{return user.username})
.then((username)=>{console.log(username)})
.catch((error)=>{console.log(error)})
.finally(()=>console.log("kuch to hua h"))