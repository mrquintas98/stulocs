const pool = require("../config/database");

	function tagsFromDB(dbObj) {
		return new Tag(dbObj.id, dbObj.name);
	}
	
	class Tag {
		constructor(id,name){
			this.id=id;
			this.name=name;
		}
		
		static async getAll() {
			try{
				let result = [];
				let dbres = await pool.query("Select * from tags");
				let dbTags = dbres.rows;
				for(let dbTag of dbTags){
					result.push(tagsFromDB(dbTag));
				}
				return {status: 200, result: result};
			} catch (err) {
				console.log(err);
				return {status: 500, result: err};
			}
		}		
	}
	
	module.exports = Tag;