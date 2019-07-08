import React from 'react'; 
import { Link } from 'react-router-dom'; 

import './questions.css'; 
import Sidebar from './sidebar'; 
import Meta from './meta'; 
import UpvoteCount from './upvote_count'
import AnswerCount from './answer_count'
import ViewCount from './view_count' 
import moment from 'moment'; 


class Questions extends React.Component {
    constructor(props) {
        super(props); 
        this.search = this.search.bind(this); 
        this.state = {
            randoms: [
                ['git', 'git-branch', 'git-remote'], 
                ['git', 'version-control', 'git-commit', 'undo'], 
                ['git', 'git-pull', 'git-fetch']
            ]
        }
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
        console.log(this.search(35, this.props.users))
        return (
            <div className="questions_page">
                <Sidebar />


                <div className="questions_right_side">
                    <div className="questions_header">
                        <h1 className="questions_title">Top Questions</h1><button className="ask_question_button">Ask Question</button>
                    </div>

                    <div className="questions_list">
                        {this.props.questions && this.props.questions.map((question, idx) =>
                            <Link to={`/questions/${question.id}`}
                                key={question.id}
                                className="questions_list_item">
                                <UpvoteCount count={Math.floor(Math.random()*10)}/>
                                <AnswerCount count={Math.floor(Math.random()*3)}/>
                                <ViewCount count={Math.floor(Math.random()*50)}/>
                                <div className="questions_list_item_right">
                                    <div className="question_list_item_title">
                                        {question.title}
                                    </div>
                                    <div className="middle_info">
                                        {this.state.randoms[idx].map(random => 
                                            <span className="tag">{random}</span>
                                        )}
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