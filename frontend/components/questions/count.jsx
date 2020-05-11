import React from 'react';

const Count = ({ count, type }) => {

    return (
        <div className={count > 0 ? `${type}_count_box` : `${type}_count_box_none`}>
            <div>{count}</div>
            <div className={`${type}_count_phrase`}>
                {count === 1 ? `${type}` : `${type}s`}
            </div>
        </div>
    )
}
    

export default Count; 