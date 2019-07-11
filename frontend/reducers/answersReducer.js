import { RECEIVE_ANSWERS } from '../actions/answerActions'; 

const answersReducer = (state={}, action) => {
    Object.freeze(state); 

    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_ANSWERS: 
            return action.answers; 
        default: 
            return state; 
    }
}

export default answersReducer; 