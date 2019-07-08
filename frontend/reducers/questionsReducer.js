import { RECEIVE_ALL_QUESTIONS } from '../actions/questionActions'; 

const questionsReducer = (state={}, action) => {
    Object.freeze(state); 

    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS: 
            return action.questions; 
        default: 
            return state; 
    }
}

export default questionsReducer;