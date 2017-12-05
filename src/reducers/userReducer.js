export default function userReducer(
	state = {currentUser: {}},
  action
) {
  switch (action.type) {
		case 'SIGNUP_USER':
      localStorage.setItem("jwtToken", action.payload.jwt)
      return {...state, currentUser: action.payload.user}
    case 'LOGIN_USER':
			console.log("i'm getting here")
      localStorage.setItem("jwtToken", action.payload.jwt)
      return {...state, currentUser: action.payload.user}
    case 'LOGOUT_USER':
      localStorage.removeItem('jwtToken')
      return {...state, currentUser: {}}
    case 'FETCH_CURRENT_USER':
      return {...state, currentUser: action.payload}
		default:
			return state;
  }
}
