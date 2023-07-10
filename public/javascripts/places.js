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


Place.getAll('placesTable')
  .then(response => {
    if (response.status === 200) {
      console.log(response.result);
    } else {
      console.error('Error adding data to the table:', response.result);
    }
  })
  .catch(err => {
    console.error('Error:', err);
  });


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