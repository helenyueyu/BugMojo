import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './sign_up_form.css'; 

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.newUser; 

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
                this.handleEmailErrors()
            }
        }
    }

    handleClickOutsidePassword(event) {
        if (this.state.submittedOnce) {
            if(this.passwordRef && !this.passwordRef.contains(event.target)) {
                this.handlePasswordErrors()
            }
        }
    }

    handleEmailErrors() {
        const badEmail1 = !this.state.email.includes('@')
        const badEmail2 = !this.state.email.includes('.')
        const badEmail3 = this.state.email.indexOf('@') > this.state.email.indexOf('.')
        const badEmail4 = this.state.email.slice(this.state.email.indexOf('.') + 1).length < 2 ||
            this.state.email.slice(this.state.email.indexOf('.') + 1).length > 3

        if (this.state.email.length === 0) {
            this.setState({
                emailError: 'Email cannot be empty.'
            })
        } else if (badEmail1 || badEmail2 || badEmail3 || badEmail4) {
            this.setState({
                emailError: `${this.state.email} is not a valid email address.`
            })
        } else {
            this.setState({
                emailError: ''
            })
        }
    }

    handlePasswordErrors() {
        if (this.state.password.length === 0) {
            this.setState({
                passwordError: 'Password cannot be empty.',
                bulletErrors: []
            })
        } else if (!!this.state.password.match(/\d/) && !this.state.password.match(/[a-zA-Z]/)) {
            this.setState({
                passwordError: 'Please add one of the following things to make your password stronger:',
                bulletErrors: ['letters']
            })
        } else if (!this.state.password.match(/\d/) && !!this.state.password.match(/[a-zA-Z]/)) {
            this.setState({
                passwordError: 'Please add one of the following things to make your password stronger:',
                bulletErrors: ['numbers']
            })
        } else if (!this.state.password.match(/\d/) && !this.state.password.match(/[a-zA-Z]/)) {
            this.setState({
                passwordError: 'Please add one of the following things to make your password stronger:',
                bulletErrors: ['letters', 'numbers']
            })
        } else if (this.state.password.length < 8) {
            this.setState({
                passwordError: `Must contain at least ${8 - this.state.password.length} more character${this.state.password.length === 7 ? '' : 's'}.`,
                bulletErrors: []
            })
        } else {
            this.setState({
                passwordError: '',
                bulletErrors: []
            })
        }
    }

    handleErrors() {
        this.handleEmailErrors()
        this.handlePasswordErrors()
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.setState({
            submittedOnce: true 
        })

        this.props.signup(this.state)
            .then(() => this.props.history.push(`/questions`))
            .fail(() => this.handleErrors())
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
                <Link to="/login/demo" style={{ color: 'white', textDecoration: 'none' }}><button className="facebook_login_signup">Log in as Demo User</button></Link>
                <div className="sign_up_form">
                    
                    <form onSubmit={this.handleSubmit}>
                        
                        
                        <label><span className="label">Display Name </span>
                            <input type="text"
                                value={this.state.username}
                                onChange={(e) => this.handleUsername(e)}
                                className="input_field"
                            />
                        </label>
                        <br/>


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
                        <label><span className="label">Email </span>
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
                                <span className="label">Password</span>
                            </div>
                            <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field_error"
                                ref={this.setPasswordRef}
                            />
                            <div className="inline_errors">
                                    <div className="input_error_message">{this.state.passwordError}
                                    <ul className={this.state.bulletErrors.length === 0 ? "hidden_input_error_message_bullets" : "input_error_message_bullets"}>
                                        {this.state.bulletErrors.map((error, idx) => <li key={idx} className="bullet">{error}</li>)}
                                    </ul>
                                </div>
                                <i className="fas fa-exclamation-circle error_icon"></i>
                            </div>
                            <div className="reminder">
                                    Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                            </div>
                        </label>
                        :
                        <label><span className="label">Password </span>
                            <input type="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePassword(e)}
                                className="input_field"
                                ref={this.setPasswordRef}
                            />
                            <div className="reminder">
                                Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                            </div>
                        </label>}


                        <input className="submit_button" type="submit" value="Sign Up"/>
                        <div className="discretionary_policy">
                            By clicking "Sign up", you agree to our <span className="blue_terms">terms of service</span>, <span className="blue_terms">privacy policy</span> and <span className="blue_terms">cookie policy</span>
                        </div>
                    </form>
                </div>
                <div className="login_reminder">Already have an account? <Link to="/login" style={{textDecoration: 'none'}} className="login_link">Log in</Link></div>
                <div className="homepage_reminder">Go back? <Link to="/" style={{textDecoration: 'none'}} className="login_link">Take me to the homepage</Link></div>
            </div>
        )
    }
}


export default SignUpForm; 