import { connect } from 'react-redux'; 
import Question from './question'; 
import { fetchQuestion, deleteQuestion } from '../../actions/questionActions'; 
import { fetchAnswers } from '../../actions/answerActions'; 

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId], 
    userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)), 
    deleteQuestion: question => dispatch(deleteQuestion(question)), 
    fetchAnswers: id => dispatch(fetchAnswers(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Question); 