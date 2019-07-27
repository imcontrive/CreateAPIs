import { createStore, combineReducers } from 'redux';
import user  from './reducer/user';
import { questions, singleQuestion , snippetQuestion} from './reducer/questions';
import {katas} from './reducer/katas';


const rootReducer = combineReducers({
	user,
	questions,
	singleQuestion,
	snippetQuestion,
	katas
})

export const store = createStore(rootReducer);
