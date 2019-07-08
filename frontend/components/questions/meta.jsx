import React from 'react'; 
import './meta.css'; 

const Meta = () => (
    <div className="meta_outer">
        <div className="meta_content">
            <ul>
                <li className="meta_group">Featured on Meta</li>
                <ul>
                    <li className="meta_blue_links">New React Update Release</li>
                    <li className="meta_blue_links">Upcoming New Developer: Interview with Sophia</li>
                </ul>
                <li className="meta_group">Hot Meta Posts</li>
                <ul> 
                    <li className="meta_blue_links">Panel: Discussion of beard vs. mustache qualities</li>
                    <li className="meta_blue_links">Wikipedia like pop-over for Stack Overflow links</li>
                    <li className="meta_blue_links">Request to add timestamp when a user posts a message to chat</li>
                    <li className="meta_blue_links">What happens to an account after you die</li>
                </ul>
            </ul>
        </div>
    </div>
)

export default Meta; 