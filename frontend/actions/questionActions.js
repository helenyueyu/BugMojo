import * as questionAPIUtil from '../util/questionAPIUtil'; 

export const RECEIVE_ALL_QUESTIONS = 'FETCH_ALL_QUESTIONS'; 

export const fetchAllQuestions = () => dispatch => (
    questionAPIUtil.getDefaultQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)))
)

const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS, 
    questions 
}) 