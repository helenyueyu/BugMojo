import React from 'react'

class Profile extends React.Component {
    
    render() {
        return (
            <>
            <h1>Hello {this.props.user && this.props.user.username}!</h1>
            </>
        )
    }
}

export default Profile