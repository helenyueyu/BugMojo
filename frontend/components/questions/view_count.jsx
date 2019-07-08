import React from 'react';
import './view_count.css'

const ViewCount = ({ count }) => (
    <div className="view_count_box">
        <div>{count}</div>
        <div className="view_count_phrase">
            {count === 1 ? "view" : "views"}
        </div>
    </div>
)

export default ViewCount; 