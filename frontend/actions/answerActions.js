import * as answerAPIUtil from '../util/answerAPIUtil'; 

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'; 

export const fetchAnswers = id => dispatch => (
    answerAPIUtil.getAnswers(id)
        .then(answers => dispatch(receiveAnswers(answers)))
)

const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS, 
    answers 
})