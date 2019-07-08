import { connect } from 'react-redux'; 
import Question from './question'; 
import { fetchQuestion } from '../../actions/questionActions'; 

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId]
})

const mapDispatchToProps = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Question); 