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
		
		static async getPlacesByTag(tag){
			try{
				let result = [];
				let dbres = await pool.query("Select places.name, places.address, places.coordx, places.coordy" +
				"FROM (tags INNER JOIN places_tags ON places_tags.tagsid = tags.id)INNER JOIN places ON places_tags.placesid = places.id"+ 
				"WHERE tags.name LIKE '%$1%'"+ 
				"ORDER BY places.id ASC;", [tag]);
				return { status:200, result:{msg:"Places with specific tag"}};
			}catch(err){
				console.log(err);
				return{status:500,result:err};
			}
			
		}

	}
	
	module.exports = Place;