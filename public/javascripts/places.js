window.onload = async function(){
    try{
        let result = await checkAuthenticated(true);
        if (result.err){
            throw result.err;
        }
        window.user = user;
        document.getElementById('user').textContent = "Hello"+window.user.name;
    } catch (err) {
        console.log(err);
        console.log("places.js - onload");
    }
}

async function logout(){
    try{
        let result = await requestLogout();
        if (!result.sucessful || result.err)
            throw result.err || {err: "Logout not sucessful"};
        window.location.pathname = "/index.html";
    } catch (err) {
        console.log(err);
        console.log("places.js - logout");
    }
}