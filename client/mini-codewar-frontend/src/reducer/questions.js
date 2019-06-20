export function questions(state = [], action) {
	switch (action.type) {
		case "ADD_QUESTIONS":
		return {
			...state,
			data: action.payload,
		};
		case "ADD_USER_DATA":
			state.push(action.data)
		return {
			...state,
		};
		// case 'TOGGLE':
		// console.log(',............action dispatched', action.data)
		// 	return [...state].map((quest, id) => action.data._id === quest._id ? ({...quest, isClicked: !action.data.isClicked}) : quest)
		case "SINGLE_QUESTION" : 
		console.log('inside single question case', action.data)
		return { 
			singleQues: action.data
		};
		default: {
			return state
		}
	}
}