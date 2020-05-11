import React from 'react';
import Sidebar from './sidebar'; 
import { Link } from 'react-router-dom'; 

class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()  {
        this.props.fetchQuestion(this.props.match.params.questionId)
            .then(question => this.setState({
                ...question.question 
            }))
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
        return (
            <div className="edit_question_page">
                <Sidebar/>
                
                
                <form className="question_form_helen" 
                    onSubmit={this.handleSubmit}>
                    <label><span className="edit_label">Title </span>
                    <input type="text"
                            className="edit_title_field"
                            value={this.state ? this.state.title : ''}
                            onChange={(e) => this.handleTitle(e)} />
                    </label>

                    <label><div className="edit_label" >Body </div>
                        <div className="review_form_before_submit_2">


                            <span className="group_1">
                                <span className="review_icon"
                                    onClick={(e) => this.handleBoldText(e)}>
                                    <i className="fas fa-bold"></i>
                                </span>
                                <span className="review_icon"><i className="fas fa-italic"></i></span>
                            </span>


                            <span className="group_2">
                                <span className="review_icon"><i className="fas fa-link"></i></span>
                                <span className="review_icon"><i className="fas fa-quote-left"></i></span>
                                <span className="review_icon"><i className="fas fa-code"></i></span>
                                <span className="review_icon"><i className="far fa-image"></i></span>
                                <span className="review_icon"><i className="far fa-file-code"></i></span>
                            </span>


                            <span className="group_3">
                                <span className="review_icon"><i className="fas fa-list-ol"></i></span>
                                <span className="review_icon"><i className="fas fa-list-ul"></i></span>
                                <span className="review_icon"><i className="fas fa-stream"></i></span>
                            </span>


                            <span className="group_4">
                                <span className="review_icon"><i className="fas fa-undo"></i></span>
                                <span className="review_icon"><i className="fas fa-redo"></i></span>
                            </span>
                        </div>

                        <textarea className="edit_body_field"
                            value={this.state ? this.state.body : ''}
                            onChange={(e) => this.handleBody(e)} />
                    </label>


                    <button className="next_button" onClick={this.handleSubmit}>
                        Save Edits
                    </button>
                    
                    <Link to={`/questions/${this.props.match.params.questionId}`}>
                    <button className="prev_button">
                        Cancel
                    </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default EditQuestion; 