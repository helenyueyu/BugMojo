import React from 'react';
import Sidebar from './sidebar'; 
import Meta from './meta'; 
import Vote from './vote'; 

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
        // console.log(this.props.question)
        return (
            <div className="question_page">
                <Sidebar/>

                <div className="overall_div">
                    <div className="question_title">
                        <div>{this.props.question && this.props.question.title}</div>
                        <div><button className="question_ask_question">Ask Question</button></div>
                    </div>

                    <hr className="question_hr"/>

                    <div className="question_aditya">

                        <Vote votes={Math.floor(Math.random()*100)}/>


                        <div className="question_body">{this.props.question && this.props.question.body}</div>
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
                {/* <div className="overall_div">
                    <div className="question_header_2">
                        <div className="question_page_title_2">{this.props.question && this.props.question.title}</div>
                        <button className="ask_question_button_2">Ask Question</button>
                    </div>
                    <div>
                    </div>
                </div> */}
                {/* */}
            </div>
        )
    }
}

export default Question; 