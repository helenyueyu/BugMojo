import { connect } from 'react-redux'; 
import Question from './question'; 
import { fetchQuestion, deleteQuestion, fetchAllUsers } from '../../actions/questionActions'; 
import { fetchAnswers, createAnswer } from '../../actions/answerActions'; 

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId], 
    userId: state.session.id, 
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)), 
    deleteQuestion: question => dispatch(deleteQuestion(question)), 
    fetchAnswers: id => dispatch(fetchAnswers(id)), 
    createAnswer: answer => dispatch(createAnswer(answer)), 
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Question); 