import React from 'react'
import { Link } from 'react-router-dom'; 

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser; 

        this.handleSubmit = this.handleSubmit.bind(this);


        this.setEmailRef = this.setEmailRef.bind(this);
        this.setPasswordRef = this.setPasswordRef.bind(this); 

        this.handleClickOutsideEmail = this.handleClickOutsideEmail.bind(this);
        this.handleClickOutsidePassword = this.handleClickOutsidePassword.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideEmail);
        document.addEventListener('mousedown', this.handleClickOutsidePassword); 
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideEmail);
        document.removeEventListener('mousedown', this.handleClickOutsidePassword); 
    }

    setEmailRef(node) {
        this.emailRef = node;
    }

    setPasswordRef(node) {
        this.passwordRef = node; 
    }

    handleClickOutsideEmail(event) {
        if (this.state.submittedOnce) {
            if (this.emailRef && !this.emailRef.contains(event.target)) {
                if (this.state.email.length !== 0) {
                    this.setState({
                        emailError: ''
                    })
                } else {
                    this.setState({
                        emailError: 'Email cannot be empty.'
                    })
                }
            }
        }
    }

    handleClickOutsidePassword(event) {
        if (this.state.submittedOnce) {
            if (this.passwordRef && !this.passwordRef.contains(event.target)) {
                if (this.state.password.length !== 0) {
                    this.setState({
                        passwordError: ''
                    })
                } else {
                    this.setState({
                        passwordError: 'Password cannot be empty.'
                    })
                }
            }
        }
    }

    handleErrors() {
        const badEmail1 = !this.state.email.includes('@')
        const badEmail2 = !this.state.email.includes('.')
        const badEmail3 = this.state.email.indexOf('@') > this.state.email.indexOf('.')
        const badEmail4 = this.state.email.slice(this.state.email.indexOf('.') + 1).length < 2 ||
            this.state.email.slice(this.state.email.indexOf('.') + 1).length > 3

        if (this.state.email.length === 0 && this.state.password.length === 0) {
            this.setState({
                emailError: 'Email cannot be empty.',
                passwordError: 'Password cannot be empty.'
            })
        } else if (this.state.email.length > 0 && this.state.password.length === 0) {
            this.setState({
                emailError: '',
                passwordError: 'Password cannot be empty.'
            })
        } else if (this.state.email.length === 0 && this.state.password.length > 0) {
            this.setState({
                emailError: 'Email cannot be empty.',
                passwordError: ''
            })
        } else if (badEmail1 || badEmail2 || badEmail3 || badEmail4) {
            this.setState({
                emailError: 'The email is not a valid email address.',
                passwordError: '',
                password: '',
                submittedOnce: false
            })
        } else if (this.props.errors.errors && this.props.errors['errors'].constructor.name === 'Object') {
            this.setState({
                emailError: 'The email or password is incorrect.',
                passwordError: '',
                password: '',
                submittedOnce: false
            })
        } 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submittedOnce: true
        })

        this.props.login(this.state)
            .then(() => this.props.history.push(`/questions`))
            .fail(() => this.handleErrors())
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
            <div className="form_background" >
                <img src={window.logo} alt="logo" className="login_image" />
                <Link to="/login/demo" style={{ color: 'white', textDecoration: 'none' }}><button className="facebook_login">Log in as Demo User</button></Link>


                <div className="sign_in_form" >

                    <form onSubmit={this.handleSubmit}>
                        
                        
                        {this.state.emailError ? 
                        
                        <label><span className="label">Email</span>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(e) => this.handleEmail(e)}
                                    className="input_field_error"
                                    ref={this.setEmailRef}
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
                                    ref={this.setEmailRef}
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
                                ref={this.setPasswordRef}
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
                                ref={this.setPasswordRef}
                            />
                        </label>}
                       
                        <input className="submit_button" type="submit" value="Log in" />
                    </form>
                </div>
                <div className="signup_reminder">Already have an account? <Link to="/signup" style={{textDecoration: 'none'}} className="signup_link">Sign up</Link></div>
                <div className="homepage_reminder_signin">Go back? <Link to="/" style={{textDecoration: 'none'}} className="login_link">Take me to the homepage</Link></div>
            </div>
        )
    }
}


export default SignInForm; 