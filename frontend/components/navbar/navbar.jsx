import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './navbar.css';

// asset_path()
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentUser 
    }

    render() {
        return (
            <nav className="navbar">
                <div className="left_components">
                    <img width='20px' src={window.logo} alt="logo" />
                    <h1>bug</h1><span className="bold_title">mojo</span>
                    
                    <span className="search_icon"><i className="fas fa-search"></i></span>


                    <input type="text" 
                        className="search_bar" 
                        value="Search..."
                        onChange={(e) => console.log(e)}/>
                    
                    {this.props.currentUser ? this.props.currentUser.username : null}
                    {this.props.currentUser ? <Link to="/" onClick={this.props.logout}>Logout </Link> : null}
                </div>
                
                <div className="right_buttons">
                {this.props.currentUser ? null : <button className="button_sign_in">
                    <Link to="/login" style={{
                        color: '#0174c6',
                        textDecoration: 'none',
                        fontFamily: 'Arial',
                        fontSize: '1rem'
                    }}>Log in</Link>
                </button>}
                {this.props.currentUser ? null : <button className="button_sign_up">
                    <Link to="/signup" style={{
                        color: '#fafafb', 
                        textDecoration: 'none', 
                        fontFamily: 'Arial', 
                        fontSize: '1rem'
                    }}>Sign up</Link>
                </button>}
                </div>
            </nav>
        )
    }
}

export default NavBar; 