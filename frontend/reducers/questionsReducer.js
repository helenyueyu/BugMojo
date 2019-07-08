import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION } from '../actions/questionActions'; 

const questionsReducer = (state={}, action) => {
    Object.freeze(state); 

    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS: 
            return action.questions;
        case RECEIVE_QUESTION: 
            newState[action.question.id] = action.question; 
            return newState; 
        default: 
            return state; 
    }
}

export default questionsReducer;