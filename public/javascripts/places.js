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


function populateTable(result){
    var table = document.getElementById("placesTable");

    // helper function        
    function addCell(tr, text) {
        var td = tr.insertCell();
        td.textContent = text;
        return td;
    }

    // insert data
    result.forEach(function (item) {
        var row = table.insertRow();
        addCell(row, 'Category: ' + item.category);
        addCell(row, 'Best selling month: ' + item.topMonthStr);
        addCell(row, 'Amount: ' + item.topAmount.toFixed(2));
    });
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