import { connect } from 'react-redux'; 
import SignInForm from './sign_in_form'; 
import { login } from '../../actions/sessionActions'; 

const mapStateToProps = state => ({
    currentUser: {
        username: '', 
        email: '', 
        password: '', 
        emailError: '', 
        passwordError: '', 
        submittedOnce: false 
    }, 
    errors: state.errors.session 
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm); 