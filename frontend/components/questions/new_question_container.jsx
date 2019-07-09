import { connect } from 'react-redux'; 
import NewQuestion from './new_question'; 
import { createQuestion } from '../../actions/questionActions'; 

const mapStateToProps = state => ({
    userId: state.session.id 
})

const mapDispatchToProps = dispatch => ({
    createQuestion: question => dispatch(createQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)