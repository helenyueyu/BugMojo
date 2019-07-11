import * as answerAPIUtil from '../util/answerAPIUtil'; 

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'; 

export const fetchAnswers = () => dispatch => (
    answerAPIUtil.getAnswers()
        .then(answers => dispatch(receiveAnswers(answers)))
)

const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS, 
    answers 
})