import { connect } from 'react-redux'; 
import Questions from './questions'; 
import { fetchAllQuestions, fetchAllUsers } from '../../actions/questionActions'; 

const mapStateToProps = state => ({
    questions: Object.values(state.entities.questions), 
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
    fetchAllQuestions: () => dispatch(fetchAllQuestions()), 
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)