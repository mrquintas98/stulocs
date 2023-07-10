const User = require("../models/usersModel");
const refreshPer = 1440e3;

module.exports.verifyAuth = async function(req,res,next){
    try{
        let token = req.session.token;
        if(!token){
            res.status(401).send({msg:"Please log in"});
            return;
        }
        let result = await User.getUserToken(token);
        if (result.status != 200){
            res.status(result.status).send(result.result);
            return;
        }
        req.user = result.result;
        reportError.session.timestamp = Math.floor(Date.now() / refreshPer)
        next();
    }catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}