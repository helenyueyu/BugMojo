import React from 'react'; 

class FormField extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dropDown: false
        }
    }

    toggleDropDown() {
        this.setState({
            dropDown: !this.state.dropDown
        })
    }

    render() {
        return (
            <>
            <div className="dr1" onClick={(e) => this.toggleDropDown(e)}>
                1. Summarize the problem<span className="plus_symbol">{this.state.dropDown ? "-" : "+"}</span>
            </div>
            {this.state.dropDown ?
                    <textarea value={this.state.body}
                        className="dropdown_textarea"
                        onChange={(e) => this.handleBody(e)}
                        onFocus={(e) => this.handleText1(e)}
                        onBlur={(e) => this.handleText1(e)} />
            : null}
            </>
        )
    }
}

export default FormField; 