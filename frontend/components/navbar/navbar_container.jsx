import { connect } from 'react-redux';
import NavBar from './navbar';
import { signup, login, logout } from '../../actions/sessionActions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)), 
    login: user => dispatch(login(user)), 
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 
