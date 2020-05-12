import React from 'react'; 
import ModeExample from '../examples/mode_example'; 


const DropDown = ({dr, text, toggleDropDown, body, handleSubBody, 
    handleText, goodExamples, badExamples, type, header, headerDetail}) => (
    <div className={text ? "big_div2" : "big_div"}>
        <div className={`dr${type}`} onClick={(e) => toggleDropDown(e, type)}>
            {header}
            <span className="plus_minus">
                <i className={dr && dr[type-1] ? "fas fa-minus" : "fas fa-plus"}></i>
            </span>
                
        </div>

        {dr && dr[type-1] ? 
        <div>
                <textarea value={body}
                    className="dropdown_textarea"
                    onChange={(e) => handleSubBody(e, type)} 
                    onFocus={(e)=> handleText(e, type)}
                    onBlur={(e) => handleText(e, type)}
                    autoFocus="autofocus"/> 

                    <div className="input_below_example">
                    <div className="header_detail">{headerDetail}</div>

                        <ModeExample 
                            goodExamples={goodExamples} 
                            badExamples={badExamples}
                        />
                    </div>
        </div>   
        : 
        null}

    </div> 
)

export default DropDown; 

