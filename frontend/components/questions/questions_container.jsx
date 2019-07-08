import { connect } from 'react-redux'; 
import Questions from './questions'; 
import { fetchAllQuestions } from '../../actions/questionActions'; 

const mapStateToProps = state => ({
    questions: Object.values(state.entities.questions)
})
const mapDispatchToProps = dispatch => ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)