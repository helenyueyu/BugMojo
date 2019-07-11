import React from 'react';
import Sidebar from './sidebar'; 
import Meta from './meta'; 
import Vote from './vote'; 
import { Link } from 'react-router-dom'; 

import './question.css'; 

class Question extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {}; 
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
        this.props.fetchAnswers(this.props.match.params.questionId)
            .then(answers => this.setState({
                answers: Object.values(answers.answers)
            }))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.questionId != this.props.match.params.questionId) {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
    }

    render() {
        return (
            <div className="question_page">
                <Sidebar/>

                <div className="overall_div">
                    <div className="question_title">
                        <div>{this.props.question && this.props.question.title}</div>
                        <div>
                            <Link to="/questions/new">
                                <button className="question_ask_question">Ask Question</button>
                            </Link>
                            
                        </div>
                    </div>

                    <hr className="question_hr"/>

                    <div className="question_aditya">

                        <Vote votes={Math.floor(Math.random()*100)}/>


                        <div className="question_body">
                            <div>
                                {this.props.question && this.props.question.body}
                            </div>
                            <div style={{marginTop: '1.5rem', display: 'block'}}>
                                {
                                    this.props.question && this.props.userId === this.props.question.authorId && 
                                    <Link to={`/questions/${this.props.match.params.questionId}/edit`} 
                                    style={{
                                        color: 'gray',
                                        textDecoration: 'none'
                                    }}>
                                        edit
                                    </Link>
                                }
                                {
                                    this.props.question && this.props.userId === this.props.question.authorId && 
                                    <button className="delete_button_danger"
                                        onClick={() => 
                                        this.props.deleteQuestion(this.props.question)
                                        .then(() => this.props.history.push('/questions'))}
                                    style={{
                                        color: 'darkRed', 
                                        border: 'none', 
                                        fontFamily: 'Arial', 
                                        fontSize: '0.9rem'
                                    }}>
                                        delete
                                    </button>
                                }
                            </div>
                        </div>


                        <div className="question_side_content">
                            <div className="asked_viewed_active">
                                <div>
                                    <ul className="asked_viewed_active_gray">
                                        <li className="asked_viewed_active_li">asked</li>
                                        <li className="asked_viewed_active_li">viewed</li>
                                        <li className="asked_viewed_active_li">active</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="asked_viewed_active_regular">
                                        <li className="asked_viewed_active_li">8 years, 11 months ago</li>
                                        <li className="asked_viewed_active_li">670,456 times</li>
                                        <li className="asked_viewed_active_li">3 months ago</li>
                                    </ul>
                                </div>
                            </div> 
                            <Meta /> 
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Question; 