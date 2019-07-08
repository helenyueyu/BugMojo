import { RECEIVE_ALL_USERS } from '../actions/questionActions'; 
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessionActions'; 

const usersReducer = (state={}, action) => {
    Object.freeze(state); 

    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return action.users; 
        case RECEIVE_CURRENT_USER: 
            newState[action.currentUser.id] = action.currentUser; 
            return newState; 
        case LOGOUT_CURRENT_USER: 
            newState = {}; 
            return newState; 
        default: 
            return state; 
    }
}

export default usersReducer; 