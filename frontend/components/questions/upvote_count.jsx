import React from 'react';

const UpvoteCount = ({count}) => (
    <div className="vote_count_box">
        <div>{count}</div>
        <div className="vote_count_phrase">
            {count === 1 ? "vote" : "votes"}
        </div>
    </div>
)

export default UpvoteCount; 


