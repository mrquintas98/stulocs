const bcrypt = require('bcrypt');
const pool = require("../config/database");
const saltRounds = 10;

function dbFromUser(dbUser){
    let user = new User();
    user.id = dbUser.id;
    user.name = dbUser.name;
    return user;
}

class User{
    constructor(id,name,pass){
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.token = token;
    }
    export(){
        let user = new User();
        user.name = this.name;
        return user;
    }

    static async register(user){
        try{
            let dbResult = await pool.query("Select * from users where user.name=$1", [user.name]);
            let dbUsers = dbResult.rows;
            if(dbUsers.length)
                return {
                    status: 400, result: [{
                        location:"body",param:"name",msg:"That user already exists"
                    }]
                };
                let encpass = await bcrypt.hash(user.pass,saltRounds);
                dbResult = await pool.query('Inser into users (name,pass) values ($1,$2)', [user.name,encpass]);
                return { status: 200, result:{
                    msg:"New user added."}};
        } catch (err) {
            console.log(err);
            return {status: 500, result:err};
        }
    }

    static async checkLogin(user){
        try{
            let dbResult = await pool.query ("Select * from users where users.name=$1", [user.name]);
            let dbUsers = dbResult.rows;
            if(!dbUsers.length)
                return {status:401,result:{msg:"Wrong user or password"}};
            let dbUser = dbUsers[0];
            let isPass = await bcrypt.compare(user.pass,dbUser.pass);
            if(!isPass)
                return {status:401, result:{msg:"Wrong username or password"}};
            return {status:200, result:dbFromUser(dbUser)};
        }catch (err) {
            console.log(err);
            return{status:500,result:err};
        }
    }

    


}