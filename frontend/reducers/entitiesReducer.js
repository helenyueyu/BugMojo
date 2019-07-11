import { combineReducers } from 'redux'; 
import usersReducer from './usersReducer'; 
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer'; 

const entitiesReducer = combineReducers({
    users: usersReducer, 
    questions: questionsReducer, 
    answers: answersReducer  
})

export default entitiesReducer; 