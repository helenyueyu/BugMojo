import { connect } from 'react-redux'; 
import Profile from './profile'; 
import { logout } from '../../actions/sessionActions'; 

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[state.session.id]
}); 

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Profile)