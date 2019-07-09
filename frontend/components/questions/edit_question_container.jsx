import { connect } from 'react-redux'; 
import EditQuestion from './edit_question'; 
import { updateQuestion } from '../../actions/questionActions'; 

const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId]
})

const mapDispatchToProps = dispatch => ({
    updateQuestion: question => dispatch(updateQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion)