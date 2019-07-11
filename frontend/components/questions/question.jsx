import React from 'react';
import Sidebar from './sidebar'; 
import Meta from './meta'; 
import Vote from './vote'; 
import { Link } from 'react-router-dom'; 
import moment from 'moment'; 

import './question.css'; 

class Question extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            question: this.props.question, 
            answers: [], 
            users: this.props.users 
        }; 
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
            .then(question => this.setState({
                question: question.question 
            }))
        this.props.fetchAnswers(this.props.match.params.questionId)
            .then(answers => this.setState({
                answers: Object.values(answers.answers)
            }))
        this.props.fetchAllUsers()
            .then(users => this.setState({
                users: Object.values(users.users)
            }))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.questionId != this.props.match.params.questionId) {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
    }

    search(searchId, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === searchId) {
                return arr[i]
            }
        }
    }

    render() {
        console.log(this.state) 
        // if (this.state.question) {
        //     console.log(this.state.question.authorId)
        // }
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
                        
                            
                            <div className="askee_box">
                                <img width="30px" src={window.identicon} alt="identicon"/>
                                {this.state.question && this.state.question.authorId && this.state.users && this.state.users[this.state.question.authorId - 1] && this.state.users[this.state.question.authorId - 1].username} <br />
                                {this.state.question && moment(this.state.question.createdAt).fromNow()}
                            </div>

                            <h1>{this.state.answers && this.state.answers.length} Answer{this.state.answers && this.state.answers.length === 1 ? "" : "s"}</h1>
                            {this.state.answers && this.state.answers.map(answer => 
                                    <li key={answer.id}>{answer.body}</li>
                            )}
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