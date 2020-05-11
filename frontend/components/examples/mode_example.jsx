import React from 'react'; 

const ModeExample = ({ goodExample, badExample, badExample2 }) => (
    <div className="separator_bottom">
        <li>
            <i className="fas fa-check carousel_check"></i>                                  
            {goodExample} 
        </li>
        <li>
            <i className="fas fa-times carousel_x"></i>
            {badExample}
        </li>
        {
        badExample2 && 
        <li>
            <i className="fas fa-times carousel_x"></i>
            {badExample2}
        </li>
        }
    </div>
)

export default ModeExample; 
