import * as answerAPIUtil from '../util/answerAPIUtil'; 

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'; 
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'; 

export const fetchAnswers = id => dispatch => (
    answerAPIUtil.getAnswers(id)
        .then(answers => dispatch(receiveAnswers(answers)))
)

export const createAnswer = answer => dispatch => (
    answerAPIUtil.createAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
)

const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS, 
    answers 
})

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER, 
    answer 
})