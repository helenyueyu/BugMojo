import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Sidebar from './sidebar'; 
import Meta from './meta'; 

import Count from './count'; 
import moment from 'moment'; 


class Questions extends React.Component {
    constructor(props) {
        super(props); 
        this.search = this.search.bind(this); 
    }
    componentDidMount() {
        this.props.fetchAllQuestions()
        this.props.fetchAllUsers() 
    }



    search(searchId, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === searchId) {
                return arr[i]
            }
        }
    }

    render() {
        return (
            <div className="questions_page">
                <Sidebar />


                <div className="questions_right_side">
                    <div className="questions_header">
                        <h1 className="questions_title">Top Questions</h1>
                        <Link to="/questions/new"><button className="ask_question_button">Ask Question</button></Link>
                    </div>

                    <div className="questions_list">
                        {this.props.questions && this.props.questions.map((question, idx) =>
                            <Link to={`/questions/${question.id}`}
                                key={question.id}
                                className="questions_list_item">
                                    <Count count={question.voteCount} type="vote" />
                                    <Count count={question.answerCount} type="answer" />
                                    <Count count={question.viewCount} type="view" />

                                <div className="questions_list_item_right">
                                    <div className="question_list_item_title">
                                        {question.title}
                                    </div>
                                    <div className="bottom_info">
                                        asked {moment(question.createdAt).fromNow()}
                                        <span className="username_answered">{this.search(question.authorId, this.props.users) && this.search(question.authorId, this.props.users).username}</span>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>


                <Meta /> 
            </div>
        )
    }
}

export default Questions; 