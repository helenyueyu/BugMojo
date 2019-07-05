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

        if (this.state.email.length === 0) {
            this.setState({
                emailError: 'Email cannot be empty.'
            })
        }

        if (this.state.password.length === 0) {
            this.setState({
                passwordError: 'Password cannot be empty.'
            })
        }

        this.props.login(this.state)
            .then(() => this.props.history.push(`/users/${this.state.username}`))
        
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
                        
                        
                        {this.state.emailError ? 
                        
                        <label><span className="label">Email</span>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(e) => this.handleEmail(e)}
                                    className="input_field_error"
                                />

                            <div className="inline_errors">
                                <div className="input_error_message">{this.state.emailError}</div>
                                <i className="fas fa-exclamation-circle error_icon"></i>
                            </div>
                        </label> 
                        : 
                        <label><span className="label">Email</span>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(e) => this.handleEmail(e)}
                                    className="input_field"
                                />
                        </label>}




                        <br />

                        {this.state.passwordError ? 
                        
                        <label>
                            <div className="flex_password">
                                <span className="label">Password</span><span className="blue_terms_2">Forgot password?</span>
                            </div>
                        <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field_error"
                            />
                            <div className="inline_errors">
                                <div className="input_error_message">{this.state.passwordError}</div>
                                <i className="fas fa-exclamation-circle error_icon"></i>
                            </div>
                        </label>
                        : 
                        <label>
                            <div className="flex_password">
                                <span className="label">Password</span><span className="blue_terms_2">Forgot password?</span>
                            </div>
                            <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field"
                            />
                        </label>}
                       
                        <input className="submit_button" type="submit" value="Log in" />
                    </form>
                </div>
                <div className="signup_reminder">Already have an account? <Link to="/signup" className="signup_link">Sign up</Link></div>
            </div>
        )
    }
}


export default SignInForm; 