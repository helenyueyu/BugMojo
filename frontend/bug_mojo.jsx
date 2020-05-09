import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/sessionActions';
import { fetchAllQuestions, fetchQuestion } from './actions/questionActions';
import { fetchAnswers, createAnswer } from './actions/answerActions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // Testing purposes 
    window.fetchAllQuestions = fetchAllQuestions;
    window.fetchQuestion = fetchQuestion;
    window.fetchAnswers = fetchAnswers;
    window.createAnswer = createAnswer;

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    // Ending of testing purposes 

    ReactDOM.render(<Root store={store} />, root);
})