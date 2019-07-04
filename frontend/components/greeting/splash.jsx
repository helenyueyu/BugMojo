import React from 'react'; 
import './splash.css'; 

const Splash = () => (
    <div className="splash">
        <h1>We <span className="three">&lt;3</span> people who code</h1>
        <p className="tagline">We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p>
        <div className="buttons">
            <button className="create_account">Create An Account</button>
            <button className="demo">Demo</button>
        </div>

        <div className="splash_body">
            <h2>For developers, by developers</h2>
            <hr width="50%" />
            <p>
                Stack Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
            </p>
        </div>
    </div>
)

export default Splash; 