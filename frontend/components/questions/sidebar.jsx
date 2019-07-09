import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => (
    <div className="sidebar_main">
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}><li className="home_menu_sidebar">Home</li></Link>
        <li className="public_menu_sidebar">PUBLIC</li>
        <ul>
            <Link to="/questions" style={{textDecoration: 'none'}}>
                <li className="bug_mojo_option_sidebar"><i className="fas fa-globe-americas" style={{ marginRight: '0.5rem', color: 'gray', fontSize: '1rem' }}></i>Bug Mojo</li>
            </Link>

            <Link to="/" style={{textDecoration: 'none'}}>
                <li className="bug_mojo_option_sidebar">Splash Page</li>
            </Link>
        </ul>
    </div>
)

export default Sidebar; 