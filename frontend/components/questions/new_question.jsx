import React from 'react'; 
import './new_question.css'; 

class NewQuestion extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: '', 
            body: '', 
            author_id: this.props.userId
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createQuestion(this.state)
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
            <form className="question_form" onSubmit={this.handleSubmit}>
                <label>Title:
                    <input type="text" 
                        value={this.state.title}
                        onChange={(e) => this.handleTitle(e)}/>
                </label>

                <textarea value={this.state.body} 
                        onChange={(e) => this.handleBody(e)} />

                <input type="submit" value="Create Question"/>
            </form>
        )
    }
}

export default NewQuestion; 