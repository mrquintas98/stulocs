const pool = require("../config/database");

class Tag {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async getAll() {
    try {
      const dbres = await pool.query("SELECT * FROM tags");
      const dbTags = dbres.rows;
      const result = dbTags.map(dbTag => new Tag(dbTag.id, dbTag.name));
      return { status: 200, result };
    } catch (err) {
      console.log(err);
      return { status: 500, result: 'An error occurred while fetching tags.' };
    }
  }
}

module.exports = Tag;
