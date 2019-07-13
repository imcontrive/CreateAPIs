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
		default: 
			return state;
	}
}


export function singleQuestion(state={}, action) {
	switch(action.type) {

		case "SINGLE_QUESTION" :
			return action.data;
		default: 
			return state;
	}
}


export function snippetQuestion(state={}, action) {
	switch(action.type) {
		case "ADD_SNIPPETS" :
		console.log('inside single question caseggggg', action.spread)
			return {...state, 
				data:action.payload
			}
		case "UPDATE_SNIPPETS" :
		console.log('check point level 4', action.updatedQues)
			return {...state, 
				data:action.payload
			}
		default: 
			return state;
	}
}
