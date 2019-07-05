import React from 'react'
import './sign_in_form.css'; 
import { Link } from 'react-router-dom'; 

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser; 

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push(`/users/${this.state.username}`));
        this.setState({
            logged_in: true
        })
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <div className="form_background">
                <img width='20px' src={window.logo} alt="logo" className="login_image" />

                <div className="sign_in_form">

                    <form onSubmit={this.handleSubmit}>
                        <label><span className="label">Display Name</span>
                        <input type="text"
                                value={this.state.username}
                                onChange={(e) => this.handleUsername(e)} 
                                className="input_field"
                                />
                        </label>
                        <br />
                        <label><span className="label">Email</span>
                            <input type="text"
                                value={this.state.email}
                                onChange={(e) => this.handleEmail(e)}
                                className="input_field"
                            />
                        </label>
                        <br />
                        <label><span className="label">Password</span><span className="blue_terms_2">Forgot password?</span>
                        <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field"
                            />
                        </label>
                       
                        <input className="submit_button" type="submit" value="Log in" />
                    </form>
                </div>
                <div className="signup_reminder">Already have an account? <Link to="/signup" className="signup_link">Sign up</Link></div>
            </div>
        )
    }
}


export default SignInForm; 