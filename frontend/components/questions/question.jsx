import React from 'react';
import Sidebar from './sidebar'; 
import { Link } from 'react-router-dom'; 


import Vote from './vote'; 
import UserBox from './user_box'; 
import QuestionSideBar from './question_side_bar'; 
import AnswereeForm from './answeree_form'; 

class Question extends React.Component {
    constructor(props) {
        super(props); 
        const testImage = window.i; 
        this.state = {
            question: this.props.question,
            userId: this.props.userId,  
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
        this.retrieveInfo(); 
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

    retrieveInfo() {
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

    handleSubmit(e) {
        e.preventDefault();
        const picked = (({ body, author_id, question_id }) => ({ body, author_id, question_id }))(this.state);
        this.props.createAnswer(picked).then(() => {
            this.retrieveInfo(); 
        })
    }

    render() {
        const {question, answers, userId, image} = this.state; 
        if (question && answers && userId && image) {
            return (
                <div className="question_page">
                    <Sidebar />

                    <div className="non_sidebar_div">

                        <div className="question_title">
                            <div>{question.title}</div>
                            <Link to="/questions/new" className="question_ask_question">
                                Ask Question
                            </Link>
                        </div>

                        <hr className="question_hr" />

                        <div className="question">
                            <Vote votes={question.voteCount} />
                            <div className="question_body">
                                <div>{question.body}</div>
                                <div className="question_edit_delete_buttons">
                                    {
                                        userId === question.authorId &&
                                        <Link to={`/questions/${this.props.match.params.questionId}/edit`}
                                            className="edit_button">
                                            edit
                                        </Link>
                                    }
                                    {
                                        userId === question.authorId &&
                                        <button className="delete_button_danger"
                                            onClick={() =>
                                                this.props.deleteQuestion(question)
                                                .then(() => this.props.history.push('/questions'))}
                                            >
                                            delete
                                        </button>
                                    }
                                </div>


                                <UserBox item={question} type="question" image={image} />
                                
                                <div className="answer_count">
                                    {answers.length} Answer{answers.length === 1 ? "" : "s"}
                                </div>
                                <hr className="horizontal_rule" />

                                <div style={{ transform: 'translateX(-80px)' }}>
                                    {answers.map(answer =>

                                        <div key={answer.id}>
                                            <div style={{ display: 'flex', direction: 'row' }}>
                                                <Vote votes="N" />
                                                <div style={{ marginLeft: '1rem' }}>{answer.body}</div>
                                            </div>

                                            <hr className="horizontal_rule_answer" />

                                            <UserBox item={answer} type="answer" image={image} />

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
        } else {
            return null; 
        }
    }
}

export default Question; 