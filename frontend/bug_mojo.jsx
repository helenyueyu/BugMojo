import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/sessionActions';
import { fetchAllQuestions, fetchQuestion, createQuestion } from './actions/questionActions';
import { fetchAnswers, createAnswer } from './actions/answerActions';
import { createVote, deleteVote } from './actions/voteActions'; 

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
    /* question:
    {
    title: "Chocolate is the best thing ever - fight me?",
    body: "Steak is also pretty good.",
    author_id: 37
    }
    */
    window.createQuestion = createQuestion; 
    window.fetchAllQuestions = fetchAllQuestions;
    window.fetchQuestion = fetchQuestion;
    window.fetchAnswers = fetchAnswers;
    window.createAnswer = createAnswer;

    window.createVote = createVote; 
    window.deleteVote = deleteVote; 

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    // Ending of testing purposes 

    ReactDOM.render(<Root store={store} />, root);
})