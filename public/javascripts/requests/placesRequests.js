async function requestGetAllPlaces() {
    try {
      const response = await fetch('/api/places');
      const data = await response.json();
      if (response.ok) {
        return { successful: true, places: data };
      } else {
        return { successful: false, error: data };
      }
    } catch (err) {
      console.log(err);
      return { successful: false, error: 'An error occurred' };
    }
  }
  
  async function requestCreatePlace(place) {
    try {
      const response = await fetch('/api/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
      });
      if (response.ok) {
        return { successful: true };
      } else {
        const data = await response.json();
        return { successful: false, error: data };
      }
    } catch (err) {
      console.log(err);
      return { successful: false, error: 'An error occurred' };
    }
  }
  
  async function requestUpdatePlace(place) {
    try {
      const response = await fetch(`/api/places/${place.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
      });
      if (response.ok) {
        return { successful: true };
      } else {
        const data = await response.json();
        return { successful: false, error: data };
      }
    } catch (err) {
      console.log(err);
      return { successful: false, error: 'An error occurred' };
    }
  }
  
  async function requestDeletePlace(placeId) {
    try {
      const response = await fetch(`/api/places/${placeId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return { successful: true };
      } else {
        const data = await response.json();
        return { successful: false, error: data };
      }
    } catch (err) {
      console.log(err);
      return { successful: false, error: 'An error occurred' };
    }
  }

  async function requestPlacesByTag(tag) {
    try {
      const response = await fetch(`/api/places?tag=${encodeURIComponent(tag)}`);
      const result = await response.json();
  
      return {
        successful: response.ok,
        places: result,
      };
    } catch (err) {
      console.log(err);
      return { err: err.message || 'An error occurred' };
    }
  }
  
  
  export {
    requestGetAllPlaces,
    requestCreatePlace,
    requestUpdatePlace,
    requestDeletePlace,
    requestPlacesByTag,
  };
  