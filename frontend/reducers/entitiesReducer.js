import { combineReducers } from 'redux'; 
import usersReducer from './usersReducer'; 
import questionsReducer from './questionsReducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    questions: questionsReducer 
})

export default entitiesReducer; 