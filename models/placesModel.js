const pool = require("../config/database");

class Place {
  constructor(id, name, address, coordx, coordy) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.coordx = coordx;
    this.coordy = coordy;
  }

  static async getAll(placesTable) {
    try {
      const response = await fetch('/api/places');
      const result = await response.json();
  
      if (response.status === 200) {
        const dbPlaces = result.result;
        const table = document.getElementById(placesTable);
  
        for (const dbPlace of dbPlaces) {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          const nameCell = document.createElement('td');
          const addressCell = document.createElement('td');
          const coordxCell = document.createElement('td');
          const coordyCell = document.createElement('td');
  
          idCell.textContent = dbPlace.id;
          nameCell.textContent = dbPlace.name;
          addressCell.textContent = dbPlace.address;
          coordxCell.textContent = dbPlace.coordx;
          coordyCell.textContent = dbPlace.coordy;
  
          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(addressCell);
          row.appendChild(coordxCell);
          row.appendChild(coordyCell);
  
          table.appendChild(row);
        }
  
        return { status: 200, result: 'Data added to the table.' };
      } else {
        return { status: response.status, result: result.result };
      }
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }
  

  static async getAllByTag(tag) {
    try {
      let result = [];
      let dbres = await pool.query(`
        SELECT places.name, places.address, places.coordx, places.coordy
        FROM tags
        INNER JOIN places_tags ON places_tags.tagsid = tags.id
        INNER JOIN places ON places_tags.placesid = places.id
        WHERE tags.name LIKE '%$1%'
        ORDER BY places.id ASC;
      `, [tag]);

      return { status: 200, result: { msg: "Places with specific tag" } };
    } catch (err) {
      console.log(err);
      return { status: 500, result: err };
    }
  }
}

module.exports = Place;
