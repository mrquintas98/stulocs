function changePage(url,msg,verbose) {
    window.location.pathname = url;
    if (verbose) alert(msg);
}

async function checkAuthenticated(verbose) {
    try {
        let result = await requestProfile();
        if (result.unauthenticated)
            changePage("index.html","Not authenticated. Going to homepage",verbose);
        else if (!result.successful || result.err) 
            throw err || "Not successful";
        else window.user = result.user;
        return {successful: true};
    } catch (err) {
        console.log(err);
        return {err:err};
    }
}