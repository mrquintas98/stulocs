async function register() {
    let msgD = document.getElementById("msg");
    msgDOM.textContent = "";
    try {
        let name = document.getElementById("name").value;
        let pass = document.getElementById("password").value;
        let res = await requestRegister(name,pass);
        if (res.successful) {
            msgD.textContent = "Account created. Go to login page";
        } else {
            msgD.textContent = "Was not able to register";
        }      
    } catch (err) {
        console.log(err);
        msgD.textContent = "An error occurred";   
    }
}