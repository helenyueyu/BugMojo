import { connect } from 'react-redux'; 
import Question from './question'; 
import { fetchQuestion, deleteQuestion } from '../../actions/questionActions'; 

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId], 
    userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)), 
    deleteQuestion: question => dispatch(deleteQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(Question); 