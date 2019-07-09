import React from 'react'; 
import './vote.css'; 

class Vote extends React.Component { 
    render() {
        return (
            <div className="vote_aditya">
                <div><i className="fas fa-caret-up vote_aditya_up"></i></div>
                <div>{this.props.votes}</div>
                <div><i className="fas fa-caret-down vote_aditya_down"></i></div>
            </div>
        )
    }
}
export default Vote; 