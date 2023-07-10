async function requestRegister(username, password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      return { successful: response.ok };
    } catch (err) {
      console.log(err);
      return { err: err.message || 'An error occurred' };
    }
  }
  
  async function requestLogin(username, password) {
    try {
      const response = await fetch('/api/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      return { successful: response.ok };
    } catch (err) {
      console.log(err);
      return { err: err.message || 'An error occurred' };
    }
  }
  
  async function requestLogout() {
    try {
      const response = await fetch('/api/users/auth', {
        method: 'DELETE',
      });
  
      return { successful: response.ok };
    } catch (err) {
      console.log(err);
      return { err: err.message || 'An error occurred' };
    }
  }
  
  async function requestProfile() {
    try {
      const response = await fetch('/api/users/auth');
      const result = await response.json();
  
      return {
        successful: response.ok,
        unauthenticated: response.status === 401,
        user: result,
      };
    } catch (err) {
      console.log(err);
      return { err: err.message || 'An error occurred' };
    }
  }
  
  export {
    requestRegister,
    requestLogin,
    requestLogout,
    requestProfile,
  };
  