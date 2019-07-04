import React from 'react'
import { Redirect } from 'react-router'

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
            <>
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                    <input type="text"
                            value={this.state.username}
                            onChange={(e) => this.handleUsername(e)} />
                    </label>
                    <br />
                    <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={(e) => this.handlePassword(e)}
                        />
                    </label>
                    <br />
                    <label>Email:
                    <input type="text"
                            value={this.state.email}
                            onChange={(e) => this.handleEmail(e)}
                        />
                    </label>
                    <input type="submit" value="Sign In" />
                </form>
            </>
        )
    }
}


export default SignInForm; 