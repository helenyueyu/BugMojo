import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { SignUpForm } from '../sign_up/sign_up_form'; 

const Greeting = ({currentUser, logout}) => (
    <div>
        {currentUser && currentUser.username}
        {currentUser && <button onClick={logout}>Logout</button>}
        {!currentUser && <Link to="/signup">Sign Up</Link>}
        {!currentUser && <Link to="/login">Sign In</Link>}
    </div>
)

export default Greeting; 