async function login(){
    let msgD = document.getElementById("msg");
    msgD.textContent = "";
    try {
        let name = document.getElementById("name").value;
        let pass = document.getElementById("password").value;
        let result = await requestLogin(name,pass);
        if(result.err){
            msgD.textContent = "An error has ocurred";
        } else if (!result.successful){
            msgD.textContent = "Wrong username/password";
        } else {
            msgD.textContent = "Login successful";
            window.location.pathname = "/places.html";
        }
    } catch (err) {
        console.log(err);
        msgD.textContent = "An error has ocurred";
    }
}