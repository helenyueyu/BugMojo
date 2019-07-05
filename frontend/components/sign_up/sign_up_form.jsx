import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './sign_up_form.css'; 

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.newUser; 

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signup(this.state)
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
                <h1 className="saying">Create your Bug Mojo account. It's free and only takes a minute.</h1>
                <div className="sign_up_form">
                    <form onSubmit={this.handleSubmit}>
                        <label><span className="label">Display Name </span>
                            <input type="text"
                                value={this.state.username}
                                onChange={(e) => this.handleUsername(e)}
                                className="input_field"/>
                        </label>
                        <br/>
                        <label><span className="label">Email </span>
                            <input type="text"
                                value={this.state.email}
                                onChange={(e) => this.handleEmail(e)}
                                className="input_field"
                            />
                        </label>
                        <br />
                        <label><span className="label">Password </span>
                            <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field"
                            />
                            <div className="reminder">
                                Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                            </div>
                        </label>
                        <input className="submit_button" type="submit" value="Sign Up"/>
                        <div className="discretionary_policy">
                            By clicking "Sign up", you agree to our <span className="blue_terms">terms of service</span>, <span className="blue_terms">privacy policy</span> and <span className="blue_terms">cookie policy</span>
                        </div>
                    </form>
                </div>
                <div className="login_reminder">Already have an account? <Link to="/login" className="login_link">Log in</Link></div>
            </div>
        )
    }
}


export default SignUpForm; 