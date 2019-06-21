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
		case "UPDATE_USER_SCORE": 
		console.log("UPDATE_USER_SCORE",action.payload.user);
		return {
			...state, user:action.payload.user
		}
		default: {
				return state
			}
	}
}

