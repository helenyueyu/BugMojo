import React from 'react'; 

const ModeExample = ({ goodExamples, badExamples }) => (

    <div className="separator_bottom">
        {goodExamples.map(example => (
            <li>
                <i className="fas fa-check carousel_check"></i>
                {example}
            </li>
        ))}
        
        {badExamples.map(example => (
            <li>
                <i className="fas fa-times carousel_x"></i>
                {example}
            </li>
        ))}
    </div>
    
)

export default ModeExample; 
