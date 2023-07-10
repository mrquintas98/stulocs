async function requestRegister(user,pass){
    try {
        const response = await fetch(`/api/users`,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username: user,
                password: pass
            })
        });
        return {successful: response.status == 200};
    } catch (err) {
        console.log(err)
        return{err:err};
    }
}

async function requestLogin(user,pass){
    try{
        const response = await fetch (`/api/users/auth`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username: user,
                password: pass
            })
        });
        return { successful: response.status == 200};
    } catch (err) {
        console.log(err)
        return{err:err};
    }
}

async function requestLogout(){
    try {
        const response = await fetch(`/api/users/auth`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
        });
        return {successful: response.status==200};
    } catch (err) {
        console.log(err);
        return{err:err};
    }
}

async function requestProfile() {
    try {
        const response = await fetch(`/api/users/auth`);
        var result = await response.json();
        return { 
            successful: response.status == 200,
            unauthenticated: response.status == 401,
            user: result
        };
    } catch (err) {
        console.log(err);
        return {err: err};
    }
}
