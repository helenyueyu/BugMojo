import React from 'react';
import './answer_count.css'

const AnswerCount = ({ count }) => (
    <div className={count > 0 ? "answer_count_box" : "answer_count_box_none"}>
        <div>{count}</div>
        <div className="answer_count_phrase">
            {count === 1 ? "answer" : "answers"}
        </div>
    </div>
)

export default AnswerCount; 