window.onload = async function() {
    try {
      const result = await checkAuthenticated(true);
      if (result.err) {
        throw result.err;
      }
      window.user = result.user;
      document.getElementById('user').textContent = "Hello " + window.user.name;
    } catch (err) {
      console.error(err);
      console.log("places.js - onload");
    }
    await populateTagsDropdown();
  }
  
  

  function renderPlacesTable(places) {
    const table = document.getElementById('placesTable');
    table.innerHTML = '';
    
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const addressHeader = document.createElement('th');
    const coordxHeader = document.createElement('th');
    const coordyHeader = document.createElement('th');
    
    nameHeader.textContent = 'Name';
    addressHeader.textContent = 'Address';
    coordxHeader.textContent = 'Coordx';
    coordyHeader.textContent = 'Coordy';
    
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(addressHeader);
    headerRow.appendChild(coordxHeader);
    headerRow.appendChild(coordyHeader);
    
    table.appendChild(headerRow);
    
    places.forEach(place => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const addressCell = document.createElement('td');
      const coordxCell = document.createElement('td');
      const coordyCell = document.createElement('td');
      
      nameCell.textContent = place.name;
      addressCell.textContent = place.address;
      coordxCell.textContent = place.coordx;
      coordyCell.textContent = place.coordy;
      
      row.appendChild(nameCell);
      row.appendChild(addressCell);
      row.appendChild(coordxCell);
      row.appendChild(coordyCell);
      
      table.appendChild(row);
    });
  }
  
  async function getPlacesByTag(tag) {
    try {
      const response = await fetch(`/api/places/tag/${tag}`);
      if (response.ok) {
        const result = await response.json();
        return { successful: true, places: result.result };
      } else {
        return { successful: false, error: "Error retrieving places." };
      }
    } catch (err) {
      console.error(err);
      return { successful: false, error: "An error occurred while retrieving places." };
    }
  }
  
  async function loadPlacesByTag(tag) {
    try {
      const result = await getPlacesByTag(tag);
      if (result.successful) {
        renderPlacesTable(result.places);
      } else {
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  async function logout() {
    try {
      const result = await requestLogout();
      if (!result.successful || result.err) {
        throw result.err || { error: "Logout not successful" };
      }
      window.location.pathname = "/index.html";
    } catch (err) {
      console.error(err);
      console.log("places.js - logout");
    }
  }
  