import React from 'react'; 

class Vote extends React.Component { 
    handleUpClick() {
        console.log('You have clicked the up button'); 
    }

    handleDownClick() {
        console.log('You have clicked the down button'); 
    }

    render() {
        return (
            <div className="vote">
                <div><i className="fas fa-caret-up vote_up" onClick={this.handleUpClick}></i></div>
                <div>{this.props.votes}</div>
                <div><i className="fas fa-caret-down vote_down" onClick={this.handleDownClick}></i></div>
            </div>
        )
    }
}
export default Vote; 