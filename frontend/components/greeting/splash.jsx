import React from 'react'; 
import './splash.css'; 

const Splash = () => (
    <div className="splash">
        <img width="100%"
            src={window.background} 
            alt="background"
            style={{position: 'relative', backgroundSize: 'cover', transform: 'translateY(100px)'}}/>
        
        <div className="splash_header">
            <h1>We <span className="three">&lt;3</span> people who code</h1>
            <p className="tagline">We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p>
            <div className="buttons">
                <button className="create_account">Create An Account</button>
                <button className="demo">Demo</button>
            </div>
        </div>

        <div className="splash_body">
            <h2>For developers, by developers</h2>
            <hr width="8%" />
            <p className="splash_description">
                Stack Overflow is an <span className="community">open community</span> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
            </p>
        </div>
    </div>
)

export default Splash; 