import React from 'react';
import Sidebar from './sidebar'; 
import Meta from './meta'; 
import Vote from './vote'; 
import { Link } from 'react-router-dom'; 
import moment from 'moment'; 

import './question.css'; 
import { inherits } from 'util';

class Question extends React.Component {
    constructor(props) {
        super(props); 
        const images = [
            window.i, 
            window.i2, 
            window.i3, 
            window.i4, 
            window.i5, 
            window.i6, 
            window.i7, 
            window.i8, 
            window.i9, 
            window.i10
        ]
        this.state = {
            question: this.props.question, 
            answers: [], 
            users: this.props.users, 
            image: images[Math.floor(Math.random()*10)], 
            body: '', 
            author_id: '', 
            question_id: '',
        }; 

        this.handleSubmit = this.handleSubmit.bind(this); 
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
        this.setState({
            body: e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const picked = (({ body, author_id, question_id }) => ({ body, author_id, question_id }))(this.state);
        this.props.createAnswer(picked)
            .then(() => this.props.history.push(`/questions/${picked.question_id}`))
    }

    render() {
        console.log(this.state) 
        const images = [
            window.i,
            window.i2,
            window.i3,
            window.i4,
            window.i5,
            window.i6,
            window.i7,
            window.i8,
            window.i9,
            window.i10
        ]
        const random1 = Math.floor(Math.random() * 10); 
        const random2 = Math.floor(Math.random() * 10); 
        const random3 = Math.floor(Math.random() * 10); 
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
                            <Vote 
                                votes={Math.floor(Math.random() * 100)} />
                        </div>
                        


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
                                <div style={{display: 'block', color: 'gray', fontSize: '0.8rem'}}>
                                    asked {this.state.question && moment(this.state.question.createdAt).fromNow()}
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <img style={{marginRight: '0.2rem', marginTop: '0.2rem', marginRight: '0.5rem'}} width="35px" height="35px" src={this.state.image} alt="identicon" />
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <div style={{ color: '#0076cb', fontSize: '0.9rem'}}>{this.state.question && this.state.question.authorId && this.state.users && this.state.users[this.state.question.authorId - 1] && this.state.users[this.state.question.authorId - 1].username}</div>
                                        <div style={{ display: 'flex', flexDirection: 'row', transform: 'translateY(-3px)', fontSize: '0.8rem' }}>
                                            
                                            <div style={{color: 'gray', fontWeight: 'bold'}}>{Math.floor(Math.random() * 10)}</div> 
                                            
                                            {random1 === 0 ? 
                                            null 
                                            :
                                            <>
                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#ffcf0f', opacity: 0.8}}>
                                                <span>&#8226;</span>
                                            </div>
                                            <div style={{ color: 'gray' }}>{random1}</div>
                                            </>
                                            }

                                            

                                            {random2 === 0 ? 
                                            null: 
                                            <>
                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#A8A8A8', opacity: 0.8}}>
                                                <span>&#8226;</span>
                                            </div>
                                            <div style={{ color: 'gray' }}>{random2}</div>
                                            </>
                                            }

                                            

                                            {random3 === 0 ? 
                                            null: 
                                            <>
                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#965A38', opacity: 0.8 }}>
                                                <span>&#8226;</span>
                                            </div>
                                            <div style={{ color: 'gray' }}>{random3}</div>
                                            </>
                                            }
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{fontSize: '1.3rem', transform: 'translateX(-50px)', marginTop: '8rem'}}>
                                {this.state.answers && this.state.answers.length} Answer{this.state.answers && this.state.answers.length === 1 ? "" : "s"}
                            </div>
                            <hr style={{
                                transform: 'translateX(-50px)', 
                                marginTop: '0.5rem',
                                borderTop: "solid 1px lightgray",
                                backgroundColor: 'transparent',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: 'none', 
                            }} />

                            <div style={{transform: 'translateX(-80px)'}}>
                            {this.state.answers && this.state.answers.map(answer => 
                                <div key={answer.id}>
                                    <div  style={{display: 'flex', direction: 'row'}}>
                                        <Vote votes={Math.floor(Math.random()*10)}/> 
                                        <div style={{marginLeft: '1rem'}}>{answer.body}</div>
                                    </div>
                                <hr style={{
                                    marginTop: '0rem',
                                    marginLeft: '2rem', 
                                    borderTop: "solid 1px lightgray",
                                    backgroundColor: 'transparent',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    borderBottom: 'none',
                                }} />


                                    <div className="answeree_box">
                                        <div style={{ display: 'block', color: 'gray', fontSize: '0.8rem' }}>
                                            asked {moment(answer.createdAt).fromNow()}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <img style={{ marginRight: '0.2rem', marginTop: '0.2rem', marginRight: '0.5rem' }} width="35px" height="35px" src={images[Math.floor(Math.random() * 10)]} alt="identicon" />
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ color: '#0076cb', fontSize: '0.9rem' }}>{this.state.users && this.state.users[answer.authorId - 1] && this.state.users[answer.authorId - 1].username}</div>
                                                <div style={{ display: 'flex', flexDirection: 'row', transform: 'translateY(-3px)', fontSize: '0.8rem' }}>

                                                    <div style={{ color: 'gray', fontWeight: 'bold' }}>{Math.floor(Math.random() * 10)}</div>

                                                    {random1 === 0 ?
                                                        null
                                                        :
                                                        <>
                                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#ffcf0f', opacity: 0.8 }}>
                                                                <span>&#8226;</span>
                                                            </div>
                                                            <div style={{ color: 'gray' }}>{random1}</div>
                                                        </>
                                                    }



                                                    {random2 === 0 ?
                                                        null :
                                                        <>
                                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#A8A8A8', opacity: 0.8 }}>
                                                                <span>&#8226;</span>
                                                            </div>
                                                            <div style={{ color: 'gray' }}>{random2}</div>
                                                        </>
                                                    }



                                                    {random3 === 0 ?
                                                        null :
                                                        <>
                                                            <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#965A38', opacity: 0.8 }}>
                                                                <span>&#8226;</span>
                                                            </div>
                                                            <div style={{ color: 'gray' }}>{random3}</div>
                                                        </>
                                                    }


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                            
                                </div>
                            )}


                            <form className="answeree_form" onSubmit={this.handleSubmit}>
                                
                                    <div className="review_form_before_submit_answer">


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

                                    <textarea className="edit_body_field_2"
                                        value={this.state.answer}
                                        onChange={(e) => this.handleAnswer(e)} />

                                    <button className="next_button" onClick={this.handleSubmit}>
                                        Post Your Answer
                                    </button>
                            </form>
                                
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