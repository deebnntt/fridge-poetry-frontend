import UserApi from '../services/userapi.js'

export function getAUser(params) {
	return function(dispatch) {
		return UserApi.createOrFetchUser(params)
			.then(user => {
				dispatch(addUser(user))
		})
	}
}

export function addUser(user) {
	return {
		type: 'USER_LOG_IN',
		payload: user
	}
}
