const bcrypt = require('bcrypt');
const pool = require("../config/database");
const saltRounds = 10;

class User {
  constructor(id, name, pass) {
    this.id = id;
    this.name = name;
    this.pass = pass;
  }

  static async register(user) {
    try {
      const dbResult = await pool.query("SELECT * FROM users WHERE name = $1", [user.name]);
      const dbUser = dbResult.rows[0];
      if (dbUser) {
        return {
          status: 400,
          result: {
            msg: "That user already exists",
          },
        };
      }

      const encpass = await bcrypt.hash(user.pass, saltRounds);
      await pool.query('INSERT INTO users (name, pass) VALUES ($1, $2)', [user.name, encpass]);

      return {
        status: 200,
        result: {
          msg: "New user added.",
        },
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        result: {
          msg: "An error occurred",
        },
      };
    }
  }

  static async checkLogin(user) {
    try {
      const dbResult = await pool.query("SELECT * FROM users WHERE name = $1", [user.name]);
      const dbUser = dbResult.rows[0];
      if (!dbUser) {
        return {
          status: 401,
          result: {
            msg: "Wrong username or password",
          },
        };
      }

      const isPass = await bcrypt.compare(user.pass, dbUser.pass);
      if (!isPass) {
        return {
          status: 401,
          result: {
            msg: "Wrong username or password",
          },
        };
      }

      return {
        status: 200,
        result: {
          id: dbUser.id,
          name: dbUser.name,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        result: {
          msg: "An error occurred",
        },
      };
    }
  }
}

module.exports = User;
