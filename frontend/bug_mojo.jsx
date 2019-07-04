import React from 'react'; 
import ReactDOM from 'react-dom'; 

import configureStore from './store/store'; 
import Root from './components/root'; 
import { login, logout, signup } from './actions/sessionActions'; 

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root'); 
    const store = configureStore(); 

    // Testing purposes 
    
    window.getState = store.getState; 
    window.dispatch = store.dispatch;

    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 

    // Ending of testing purposes 

    ReactDOM.render(<Root store={store}/>, root); 
})