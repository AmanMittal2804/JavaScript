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

async function consume(){
    try{
        const response = await promise
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consume()