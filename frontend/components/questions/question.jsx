import React from 'react';
import Sidebar from './sidebar'; 
import Meta from './meta'; 

import './question.css'; 

class Question extends React.Component {
    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.questionId != this.props.match.params.questionId) {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
    }

    render() {
        console.log(this.props.question)
        return (
            <div className="question_page">
                <Sidebar />
                <div className="questions_right_side">
                    <div className="questions_header_2">
                        <div className="question_page_title_2">{this.props.question && this.props.question.title}</div>
                        <button className="ask_question_button_2">Ask Question</button>
                    </div>
                </div>
                <Meta/>
            </div>
        )
    }
}

export default Question; 