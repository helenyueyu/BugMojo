import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     menuOpen: this.props.menuOpen 
        // }

        // this.setMenuRef = this.setMenuRef.bind(this);

        // this.handleClickOutsideMenu = this.handleClickOutsideMenu.bind(this);
    }

    // setMenuRef(node) {
    //     this.menuRef = node;
    // }

    // componentDidMount() {
    //     document.addEventListener('mousedown', this.handleClickOutsideMenu);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutsideMenu); 
    // }

    // handleClickOutsideMenu(event) {
    //     if (this.state.menuOpen) {
    //         if (this.menuRef && !this.menuRef.contains(event.target)) {
    //             this.setState({
    //                 menuOpen: false
    //             })
    //         }
    //     }
    // }

    render() {
        return (
            <div className={this.props.menuOpen ? "dropdown" : "dropdown_hidden"} ref={this.setMenuRef}>
                <ul>
                    <Link to="/" style={{color: 'black', textDecoration: 'none'}}><li className="home_menu">Home</li></Link>
                    <li className="public_menu">PUBLIC</li>
                    <ul>
                        <Link to="/questions" style={{textDecoration: 'none'}}>
                            <li className="bug_mojo_option"><i className="fas fa-globe-americas" style={{ marginRight: '0.5rem', color: 'gray', fontSize: '1rem' }}></i>Bug Mojo</li>
                        </Link>
                    </ul>
                </ul>
            </div>
        )
    }
}

export default Menu; 