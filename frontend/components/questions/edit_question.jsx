import React from 'react';
import './edit_question.css';

class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateQuestion(this.state)
            .then(() => this.props.history.push(`/questions`))
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    render() {
        console.log(this.props.userId)
        return (
            <div>
                <form className="question_form" onSubmit={this.handleSubmit}>
                    <label>Title:
                    <input type="text"
                            value={this.state.title}
                            onChange={(e) => this.handleTitle(e)} />
                    </label>

                    <textarea value={this.state.body}
                        onChange={(e) => this.handleBody(e)} />

                    <input type="submit" value="Update Question" />
                </form>
            </div>
        )
    }
}

export default EditQuestion; 