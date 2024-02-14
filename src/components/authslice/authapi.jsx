export  const createuser = (user) => {
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8080/users",
            {
                method : 'post',
                body : JSON.stringify(user),
                headers:{
                    'content-type':'application/json'
                },
            }
        )
        const data = await response.json();
        resolve({data});
    });
}
export  const logindetail = (user) => {
    return new Promise(async(resolve,reject)=>{
        const response = await fetch(`http://localhost:8080/users?email=${user.email}&&?password=${user.password}`);
        const data = await response.json();
        if(data.length){
            resolve({data});
            console.log(data)
        }
        else {
            reject({'message':'Invalid User'})
        }
    });
}