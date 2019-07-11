import * as questionAPIUtil from '../util/questionAPIUtil'; 

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'; 
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'; 
export const REMOVE_QUESTION = 'REMOVE_QUESTION'; 

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'; 


export const fetchAllQuestions = () => dispatch => (
    questionAPIUtil.getDefaultQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)))
)

export const fetchQuestion = id => dispatch => (
    questionAPIUtil.getQuestion(id)
        .then(question => dispatch(receiveQuestion(question)))
)

export const createQuestion = question => dispatch => (
    questionAPIUtil.createQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
)

export const updateQuestion = question => dispatch => (
    questionAPIUtil.updateQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = question => dispatch => (
    questionAPIUtil.deleteQuestion(question)
        .then(question => dispatch(removeQuestion(question)))
)


export const fetchAllUsers = () => dispatch => (
    questionAPIUtil.getUsers()
        .then(users => dispatch(receiveAllUsers(users)))
)

const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS, 
    questions 
}) 

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION, 
    question 
})

const removeQuestion = question => ({
    type: REMOVE_QUESTION, 
    question 
})

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS, 
    users 
})