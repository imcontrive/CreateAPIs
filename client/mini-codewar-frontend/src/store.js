import { createStore, combineReducers } from 'redux';
import user  from './reducer/user';
import { questions, singleQuestion } from './reducer/questions';


const rootReducer = combineReducers({
	user,
	questions,
	singleQuestion,
})

export const store = createStore(rootReducer);
