import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Menu from './menu'; 

import './navbar.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser, 
            menuOpen: false 
        }
    }

    openMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen 
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="left_components">
                    
                    <button className={this.state.menuOpen ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} 
                                onClick={() => this.openMenu()}
                                type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <Menu menuOpen={this.state.menuOpen}/>
                    <Link to="/" style={{color: 'black', textDecoration: 'none'}} ><h1 className="hover_title">
                        <img width='20px' style={{transform: 'translateX(-2.5px) translateY(2.5px)'}} src={window.logo} alt="logo" /><span className="raleway_title">bug</span><span className="bold_title">mojo</span>
                    </h1></Link>
                    
                    <span className="search_icon"><i className="fas fa-search"></i></span>


                    <input type="text" 
                        className="search_bar" 
                        value="Search..."
                        onChange={(e) => console.log(e)}/>
                    
                    <div className="username">{this.props.currentUser ? this.props.currentUser.username : null}</div>
                    {this.props.currentUser ? <Link to="/" onClick={this.props.logout}><button className="logout_button">Logout</button></Link> : null}
                    
                </div>
                
                <div className="right_buttons">
                {this.props.currentUser ? null : 
                    <Link to="/login"><button className="button_sign_in">Log in</button></Link>
                }
                {this.props.currentUser ? null : 
                        <Link to="/signup" ><button className="button_sign_up">Sign up </button></Link>
               }
                </div>
            </nav>
        )
    }
}

export default NavBar; 