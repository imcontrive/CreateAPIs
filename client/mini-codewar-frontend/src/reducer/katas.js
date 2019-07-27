export function katas(state = [], action) {
	switch (action.type) {
		case "ADD_KATAS":
		return {
			...state,
			data: action.payload,
		};
		default: 
			return state;
	}
}