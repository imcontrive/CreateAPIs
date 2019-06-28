import { createStore, combineReducers } from 'redux';
import user  from './reducer/user';
import { questions, singleQuestion , snippetQuestion} from './reducer/questions';


const rootReducer = combineReducers({
	user,
	questions,
	singleQuestion,
	snippetQuestion
})

export const store = createStore(rootReducer);
