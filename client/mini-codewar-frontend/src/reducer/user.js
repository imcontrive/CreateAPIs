const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || '',
  isAuthenticated: false,
  isAuthInProgress: true
}

export default function User(state = initialState, action) {
	switch (action.type) {
		case "REGISTER_USER":
		return {
			...state,
			user: action.payload.user,
			isAuthenticated: true,
      isAuthInProgress: false
		};
		case "ALL_USERS":
		return {
			...state,
			allUsers: action.payload,
			isAuthenticated: true,
      isAuthInProgress: false
		};
		default: {
				return state
			}
	}
}
