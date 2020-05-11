import React from 'react'; 
import Meta from './meta'; 

const QuestionSideBar = () => (
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
)

export default QuestionSideBar; 