export const signupUser = (userObj) => {
  return (dispatch) => {
    dispatch({ type: 'START_LOGIN_USER_REQUEST' });
    return fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: 'SIGNUP_USER', payload })); //payload should include jwt token & user obj
  };
}

export const loginUser = (userObj) => {
  return (dispatch) => {
    dispatch({ type: 'START_LOGIN_USER_REQUEST' });
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: 'LOGIN_USER', payload })); //payload should include jwt token & user obj
  };
}

export const logoutUser = () => {
  return { type: 'LOGOUT_USER' }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: 'START_USERS_REQUEST' });
    return fetch('http://localhost:3000/me', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
      }
    })
      .then(res => res.json())
      .then(payload => {
				console.log(payload)
				dispatch({ type: 'FETCH_CURRENT_USER', payload })});
  };
}
