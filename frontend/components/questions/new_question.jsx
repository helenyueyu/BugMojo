import React from 'react'; 

import NewQuestionTitle from './new_question_title'; 
import ModeExample from '../examples/mode_example'; 

class NewQuestion extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: '', 
            body: '', 
            body1: '', 
            body2: '', 
            body3: '', 
            body4: '', 
            author_id: this.props.userId, 
            displayTitle: true, 
            displayDescription: false, 
            displayReview: false, 
            dr1: false, 
            dr2: false, 
            dr3: false, 
            dr4: false, 
            text1: false, 
            text2: false, 
            text3: false, 
            text4: false, 
            titleError: '', 
            bodyError: 'Body cannot be blank.', 
            goodExample1: "I'm setting up a new server, and want to support UTF- 8 fully in my web application.Where do I need to set the encoding / charsets?", 
            goodExample2: "This is for a new Linux server, running MySQL 5, PHP 5 and Apache 2. In the past, I’ve tried on existing servers and always seem to end up having to fall back to ISO- 8859 - 1.", 
            goodExample3: "Use code fences and syntax highlighting to format your code properly and provide context", 
            goodExample4: "I expect the output of 5/2 to be 2.5, but the actual output is 2.", 
            badExample1: "I want to support UTF-8 fully in my web application.", 
            badExample2: "This for a new server. In the past, I’ve tried on existing servers.", 
            badExample3a: "Don’t paste an entire file", 
            badExample3b: "Don't paste just one line", 
            badExample4: "The output is 2.5, but that is wrong."
        }

        this.handleSubmit = this.handleSubmit.bind(this); 

        this.setTitleRef = this.setTitleRef.bind(this);
        this.handleTitle = this.handleTitle.bind(this); 
        this.displayDescription = this.displayDescription.bind(this); 
        

        this.handleClickOutsideTitle = this.handleClickOutsideTitle.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideTitle);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideTitle);
    }

    setTitleRef(node) {
        this.titleRef = node;
    }

    handleClickOutsideTitle(event) {
        if (this.state.title.length > 0) {
            if (this.titleRef && !this.titleRef.contains(event.target)) {
                if (this.state.title.length > 15) {
                    this.setState({
                        titleError: ''
                    })
                } else {
                    this.setState({
                        titleError: 'Title must be at least 15 characters.'
                    })
                }
            }
        } else {
            this.setState({
                titleError: ''
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const picked = (({title, body, author_id}) => ({title, body, author_id}))(this.state); 
        this.props.createQuestion(picked)
            .then(() => this.props.history.push(`/questions`))
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleBody(e) {
        this.setState({
            body: e.target.value, 
            bodyError: this.state.body.length === 0 ? 'Body cannot be blank.' : '' 
        })
    }

    handleSubBody(e, idx) {
        this.setState({
            [`body${idx}`]: e.target.value,
            body: this.state.body1 + this.state.body2 + this.state.body3 + this.state.body4,
            bodyError: this.state.body.length === 0 ? 'Body cannot be blank.' : ''
        })
    }

    displayTitle(e) {
        this.setState({
            displayTitle: true, 
            displayDescription: false, 
            displayReview: false 
        })
    }

    displayDescription(e) {
        this.setState({
            displayTitle: false, 
            displayDescription: true, 
            displayReview: false 
        })
    }

    displayReview(e) {
        this.setState({
            displayTitle: false, 
            displayDescription: false, 
            displayReview: true  
        })
    }

    toggleDropDown(e, idx) {
        this.setState({
            [`dr${idx}`]: !this.state[`dr${idx}`]
        })
    }

    handleText(e, idx) {
        this.setState({
            [`text${idx}`]: !this.state[`text${idx}`]
        })
    }


    handleBoldText(e) {
        this.setState({
            body: this.state.body + "**strong text**"
        })
    }

    render() {
        return (
            <div className="new_question_page">
                <div className="button_header">
                    <button className={this.state.displayTitle ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.displayTitle(e)}>Title</button>
                    <button className={this.state.displayDescription ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.displayDescription(e)}>Description</button>
                    <button className={this.state.displayReview ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.displayReview(e)}>Review</button>
                </div>

                <form className="question_form" onSubmit={this.handleSubmit}>
                    
                    <NewQuestionTitle 
                            displayTitle={this.state.displayTitle} 
                            titleError={this.state.titleError}

                            setTitleRef={this.setTitleRef} 
                            handleTitle={this.handleTitle}
                            displayDescription={this.displayDescription} />

                    {this.state.displayDescription ? 

                        <div className="carousel_body">
                            <h1 className="carousel_header">Tell us more about your question</h1>
                            <h2 className="carousel_subheader">Your description gives people the information they need to help you answer your question.</h2>

                            <div className="carousel_tagline"><i className="fa fa-question-circle question_mark" aria-hidden="true"></i><span className="bold_help">Want more help?</span> Check out these examples of great question descriptions: 
                                <a href="https://stackoverflow.com/questions/50464314/why-isnt-an-animation-flipped-horizontally-when-i-call-setflippedtrue" style={{marginLeft: '0.25rem'}}>Example 1</a>,
                                <a href="https://stackoverflow.com/questions/50378884/when-catch-doesnt-actually-catch-anything" style={{marginLeft: '0.25rem'}}>Example 2</a>
                            </div>

                            <div className="dropdown_rows">
                                

                                <div className="guided_mode">Guided Mode</div>
                                <div className="guided_mode_helpers">
                                    {["Links", "Images", "Styling/Headers", "Lists", 
                                        "Blockquotes", "Code", "HTML"].map(type => <span className="guided_dropdown_link">{type}</span>)}
                                    
                                </div>
                                <div className={this.state.text1 ? "big_div2" : "big_div"}>
                                <div className="dr1"
                                        onClick={(e) => this.toggleDropDown(e, 1)}>1. Summarize the problem
                                        
                                        <span className="plus_minus">{this.state.dr1 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                        
                                        </div>
                                {this.state.dr1 ? 

                                <div>
                                        <textarea value={this.state.body1}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleSubBody(e, 1)} 
                                            onFocus={(e)=> this.handleText(e, 1)}
                                            onBlur={(e) => this.handleText(e, 1)}
                                            autoFocus="autofocus"/> 

                                            <div className="input_below_example">

                                                <div className="header_detail">Include details about your goals and problem</div>

                                            <ModeExample goodExample={this.state.goodExample1} badExample={this.state.badExample1}/>
                                    

                                            </div>
                                </div>   
                                : 
                                null}
                                </div>


                                <div className={this.state.text2 ? "big_div2" : "big_div"}>
                                <div className="dr2"
                                    onClick={(e) => this.toggleDropDown(e, 2)}>2. Provide background including what you've already tried 
                                        
                                    <span className="plus_minus">{this.state.dr2 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr2 ?

                                    <div>
                                        <textarea value={this.state.body2}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleSubBody(e, 2)}
                                            onFocus={(e) => this.handleText(e, 2)}
                                            onBlur={(e) => this.handleText(e, 2)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                            <div className="header_detail">Include any research you've conducted</div>


                                            <ModeExample 
                                                goodExample={this.state.goodExample2} 
                                                badExample={this.state.badExample2} />
                                        </div>
                                    </div>
                                    :
                                    null}
                                    </div>

                                <div className={this.state.text3 ? "big_div2" : "big_div"}>
                                <div className="dr3"
                                    onClick={(e) => this.toggleDropDown(e, 3)}>3. Show some code
                                        
                                    <span className="plus_minus">{this.state.dr3 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr3 ?

                                    <div>
                                        <textarea value={this.state.body3}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleSubBody(e, 3)}
                                            onFocus={(e) => this.handleText(e, 3)}
                                            onBlur={(e) => this.handleText(e, 3)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                            <div className="header_detail">Share the minimum amount of code others need to reproduce your problem (also called a minimal, reproducible example)</div>

                                            <ModeExample 
                                                goodExample={this.state.goodExample3} 
                                                badExample={this.state.badExample3a} 
                                                badExample2={this.state.badExample3b}/>

                                        </div>
                                    </div>
                                    :
                                    null}
                                    </div>

                                <div className={this.state.text4 ? "big_div2" : "big_div"}>
                                <div className="dr4"
                                    onClick={(e) => this.toggleDropDown(e, 4)}>4. Describe expected and actual results including any error messages
                                        
                                    <span className="plus_minus">{this.state.dr4 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr4 ?

                                    <div>
                                        <textarea value={this.state.body4}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleSubBody(e, 4)}
                                            onFocus={(e) => this.handleText(e, 4)}
                                            onBlur={(e) => this.handleText(e, 4)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                
                                            <ModeExample
                                                goodExample={this.state.goodExample4}
                                                badExample={this.state.badExample4}/>

                                        </div>
                                    </div>
                                    :
                                    null}
                                    </div>

                            </div>
                            
                            <div className="prev_next_buttons">
                                <button className="prev_button"
                                    onClick={(e) => this.displayTitle(e)}>
                                    Previous
                                </button>

                                <button className="next_button"
                                    onClick={(e) => this.displayReview(e)}>
                                    Next
                                </button>
                            </div>
                           
                        </div>
                    : 
                    null }

                    

                    {this.state.displayReview ? 

                    <div className="carousel_body">
                        <h1 className="carousel_header">Review your question</h1>
                        <h2 className="carousel_subheader">Almost there! Let’s give your question one more look. And don’t worry—you can edit your question after it’s posted, too.</h2>


                            <div className="carousel_example_1">
                                <div className="hypothetical">Check for typos, slang, and code formatting issues.</div>
                                <div className="hypothetical_example">For example: </div>
                                <ul>
                                    <div className="separator_top">
                                        <li><i className="fas fa-check carousel_check"></i>
                                            Format your code: <span className="code_snippet">SELECT * FROM Users WHERE Id = 1;</span>
                                        </li>
                                        <li><i className="fas fa-times carousel_x"></i>
                                           Don’t include slang or shorthand: “u can’t bc it returns -1”
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <div className="carousel_tagline" style={{marginTop: '1.25rem'}}><i className="fa fa-question-circle question_mark" aria-hidden="true"></i><span className="bold_help">Want more help?</span> Check out 
                                <a href="https://stackoverflow.com/editing-help" style={{ marginLeft: '0.25rem'}}>these tips for editing with Markdown</a> for guidance. 
                            </div>

                        {this.state.titleError ? 
                        <label>
                            <div className="carousel_question_title">Title</div>
                            <input type="text"
                                className="review_title title_input input_field_error"
                                value={this.state.title} 
                                onChange={(e) => this.handleTitle(e)}/>

                            <div className="inline_errors">
                                <div className="input_error_message">{this.state.titleError}</div>
                                <i className="fas fa-exclamation-circle error_icon"></i>
                                </div>
                        </label>
                        : 
                        <label>
                                <div className="carousel_question_title">Title</div>
                                <input type="text"
                                    className="review_title title_input"
                                    value={this.state.title} 
                                    onChange={(e) => this.handleTitle(e)}/>

               
                        </label>}
                                    
                        <div className="review_form_before_submit">


                            <span className="group_1">
                                <span className="review_icon" 
                                        onClick={(e) => this.handleBoldText(e)}>
                                        <i className="fas fa-bold"></i>
                                </span>
                                <span className="review_icon"><i className="fas fa-italic"></i></span>
                            </span>
                                

                            <span className="group_2">
                                <span className="review_icon"><i className="fas fa-link"></i></span>
                                <span className="review_icon"><i className="fas fa-quote-left"></i></span>
                                <span className="review_icon"><i className="fas fa-code"></i></span>
                                <span className="review_icon"><i className="far fa-image"></i></span>
                                <span className="review_icon"><i className="far fa-file-code"></i></span>
                            </span>

                                
                            <span className="group_3">
                                <span className="review_icon"><i className="fas fa-list-ol"></i></span>
                                <span className="review_icon"><i className="fas fa-list-ul"></i></span>
                                <span className="review_icon"><i className="fas fa-stream"></i></span>
                            </span>


                            <span className="group_4">
                                <span className="review_icon"><i className="fas fa-undo"></i></span>
                                <span className="review_icon"><i className="fas fa-redo"></i></span>
                            </span>
                        </div>

                            <div className="guided_mode_helpers">
                                {["Links", "Images", "Styling/Headers", "Lists",
                                    "Blockquotes", "Code", "HTML"].map(type => <span className="guided_dropdown_link">{type}</span>)}
                    
                            </div>

                        {this.state.bodyError ? 
                        <>
                                    <textarea className="confirmed_textbox input_field_error"
                                        value={this.state.body}
                                        onChange={(e) => this.handleBody(e)}
                                        spellCheck="value" />

                                    <div className="inline_errors">
                                        <div className="input_error_message">{this.state.bodyError}</div>
                                        <i className="fas fa-exclamation-circle error_icon"></i>
                                    </div>
                        </>
                        : 
                        <textarea className="confirmed_textbox"
                        value={this.state.body}
                        onChange={(e) => this.handleBody(e)}
                        spellCheck="value"/>}

                            <hr style={{
                                
                                borderTop:"dotted 1px rgb(189, 196, 202)", 
                                backgroundColor: 'transparent', 
                                borderLeft: 'none', 
                                borderRight: 'none', 
                                borderBottom: 'none'}} />

                            <div className="markdown_formatted_answer">
                                {this.state.body}
                            </div>
                        

                            <hr style={{
                                marginTop: '2rem', 
                                borderTop: "dotted 1px rgb(189, 196, 202)",
                                backgroundColor: 'transparent',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: 'none'
                            }} />
                     
                           <div className="prev_next_buttons">
                                {this.state.bodyError || this.state.titleError ? 
                                <button className="disabled_next_button"
                                    disabled={true}>
                                    Post Your Question 
                                </button>
                                : <input className="next_button" type="submit" value="Post Your Question" />
                                }
                           </div>
                            
                    </div>
                    : null } 
                    
                </form>
            </div>
        )
    }
}

export default NewQuestion; 