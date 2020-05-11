import React from 'react';
import Sidebar from './sidebar'; 

import Vote from './vote'; 
import { Link } from 'react-router-dom'; 
import moment from 'moment'; 

import AskeeBox from './askee_box'; 
import QuestionSideBar from './question_side_bar'; 
import AnswereeForm from './answeree_form'; 

class Question extends React.Component {
    constructor(props) {
        super(props); 
        const testImage = window.i; 
        this.state = {
            question: this.props.question, 
            answers: [], 
            users: this.props.users, 
            image: testImage, 
            body: '', 
            author_id: '', 
            question_id: ''
        }; 

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleAnswer = this.handleAnswer.bind(this); 
    }


    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId)
            .then(question => this.setState({
                question: question.question, 
                question_id: question.question.id 
            }))
        this.props.fetchAnswers(this.props.match.params.questionId)
            .then(answers => this.setState({
                answers: Object.values(answers.answers)
            }))
        this.props.fetchAllUsers()
            .then(users => this.setState({
                users: Object.values(users.users), 
                author_id: this.props.userId
            }))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.questionId != this.props.match.params.questionId) {
            this.props.fetchQuestion(this.props.match.params.questionId)
        }
    }

    handleAnswer(e) {
        console.log(e.target.value)
        this.setState({
            body: e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const picked = (({ body, author_id, question_id }) => ({ body, author_id, question_id }))(this.state);
        console.log(picked); 
        this.props.createAnswer(picked).then(() => {
            this.props.fetchQuestion(this.props.match.params.questionId)
                .then(question => this.setState({
                    question: question.question,
                    question_id: question.question.id
                }))
            this.props.fetchAnswers(this.props.match.params.questionId)
                .then(answers => this.setState({
                    answers: Object.values(answers.answers)
                }))
            this.props.fetchAllUsers()
                .then(users => this.setState({
                    users: Object.values(users.users),
                    author_id: this.props.userId
                }))
        })
    }

    render() {
        const image = window.i; 

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
                        <div style={{ transform: 'translateX(10px)' }}>
                            <Vote votes={this.state.question && this.state.question.voteCount} />
                        </div>
                        


                        <div className="question_body">
                            <div>
                                {this.props.question && this.props.question.body}
                            </div>
                            <div style={{marginTop: '1.5rem', display: 'block'}}>
                                {
                                    this.props.question && this.props.userId === this.props.question.authorId && 
                                    <Link to={`/questions/${this.props.match.params.questionId}/edit`} 
                                    className="edit_button">
                                        edit
                                    </Link>
                                }
                                {
                                    this.props.question && this.props.userId === this.props.question.authorId && 
                                    <button className="delete_button_danger"
                                        onClick={() => 
                                        this.props.deleteQuestion(this.props.question)
                                        .then(() => this.props.history.push('/questions'))}
                                    >
                                        delete
                                    </button>
                                }
                            </div>
                        
                            
                           <AskeeBox question={this.state.question} image={this.state.image} />

                            <div style={{fontSize: '1.3rem', transform: 'translateX(-50px)', marginTop: '8rem'}}>
                                {this.state.answers && this.state.answers.length} Answer{this.state.answers && this.state.answers.length === 1 ? "" : "s"}
                            </div>
                            <hr className="horizontal_rule" />

                            <div style={{transform: 'translateX(-80px)'}}>
                            {this.state.answers && this.state.answers.map(answer => 

                                <div key={answer.id}>
                                    <div  style={{display: 'flex', direction: 'row'}}>
                                        <Vote votes="N"/> 
                                        <div style={{marginLeft: '1rem'}}>{answer.body}</div>
                                    </div>

                                <hr className="horizontal_rule_answer" />


                                    <div className="answeree_box">
                                        <div style={{ display: 'block', color: 'gray', fontSize: '0.8rem' }}>
                                            asked {moment(answer.createdAt).fromNow()}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <img style={{ marginRight: '0.2rem', marginTop: '0.2rem', marginRight: '0.5rem' }} width="35px" height="35px" src={image} alt="identicon" />
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ color: '#0076cb', fontSize: '0.9rem' }}>{this.state.users && this.state.users[answer.authorId - 1] && this.state.users[answer.authorId - 1].username}</div>
                                                <div style={{ display: 'flex', flexDirection: 'row', transform: 'translateY(-3px)', fontSize: '0.8rem' }}>

                                                    <div style={{ color: 'gray', fontWeight: 'bold' }}>{5}</div>

                                            
                                                        <>
                                                            <div className="gold_badge"><span>&#8226;</span></div>
                                                            <div style={{ color: 'gray' }}>{5}</div>
                                                        </>


                                                        <>
                                                            <div className="silver_badge"><span>&#8226;</span></div>
                                                            <div style={{ color: 'gray' }}>{5}</div>
                                                        </>

                                                        <>
                                                            <div className="bronze_badge">
                                                                <span>&#8226;</span>
                                                            </div>
                                                            <div style={{ color: 'gray' }}>{5}</div>
                                                        </>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                            
                                </div>
                            )}


                            <AnswereeForm handleSubmit={this.handleSubmit} handleAnswer={this.handleAnswer} />
                                
                            </div>
                        </div>


                        <QuestionSideBar />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Question; 