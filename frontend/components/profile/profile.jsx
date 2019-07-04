import React from 'react'

class Profile extends React.Component {
    
    render() {
        console.log(this.props.user)
        return (
            <h1>Hello{this.props.user && this.props.user.username}</h1>
        )
    }
}

export default Profile