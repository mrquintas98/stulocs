const pool = require("../config/database");

	function placesFromDB(dbObj) {
		return new Place(dbObj.id, dbObj.name,dbObj.address,dbObj.coordx,dbObj.coordy);
	}
	
	class Place {
		constructor(id,name,address,coordx,coordy){
			this.id=id;
			this.name=name;
			this.address=address;
			this.coordx=coordx;
			this.coordy=coordy;
		}
		
		static async getAll() {
			try{
				let result = [];
				let dbres = await pool.query("Select * from places");
				let dbPlaces = dbres.rows;
				for(let dbPlace of dbPlaces){
					result.push(placesFromDB(dbPlace));
				}
				return {status: 200, result: result};
			} catch (err) {
				console.log(err);
				return {status: 500, result: err};
			}
		}		
	}
	
	module.exports = Place;