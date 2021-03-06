import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessionActions'; 

const sessionReducer = (state={}, action) => {
    Object.freeze(state); 

    let newState = Object.assign({}, state); 

    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            newState['id'] = action.currentUser.id; 
            return newState; 
        case LOGOUT_CURRENT_USER: 
            newState['id'] = null; 
            return newState; 
        default: 
            return state; 
    }
}

export default sessionReducer; 