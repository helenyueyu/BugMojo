import React from 'react'; 

import NewQuestionTitle from './new_question_title'; 
import ModeExample from '../examples/mode_example'; 

import Dropdown from './dropdown'; 

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
            dr: [false, false, false, false], 
            text1: false, 
            text2: false, 
            text3: false, 
            text4: false, 
            titleError: '', 
            bodyError: 'Body cannot be blank.', 
            goodExamples: [
                ["I'm setting up a new server, and want to support UTF- 8 fully in my web application.Where do I need to set the encoding / charsets?"],
                ["This is for a new Linux server, running MySQL 5, PHP 5 and Apache 2. In the past, I’ve tried on existing servers and always seem to end up having to fall back to ISO- 8859 - 1."], 
                ["Use code fences and syntax highlighting to format your code properly and provide context"], 
                ["I expect the output of 5/2 to be 2.5, but the actual output is 2."],
            ], 
            badExamples: [
                ["I want to support UTF-8 fully in my web application."], 
                ["This for a new server. In the past, I’ve tried on existing servers."], 
                ["Don’t paste an entire file", "The output is 2.5, but that is wrong."], 
                ["The output is 2.5, but that is wrong."]
            ], 
            headers: [
                "1. Summarize the problem", 
                "2. Provide background including what you've already tried", 
                "3. Show some code", 
                "4. Describe expected and actual results including any error messages"
            ], 
            subHeaders: [
                "Include details about your goals and problem", 
                "Include any research you've conducted", 
                "Share the minimum amount of code others need to reproduce your problem (also called a minimal, reproducible example)", 
                "Share the minimum amount of code others need to reproduce your problem (also called a minimal, reproducible example)"
            ],
            textareaIcons: [
                ["fas fa-bold", "fas fa-italic"],
                ["fas fa-link", "fas fa-quote-left", "fas fa-code", "far fa-image", "far fa-file-code"],
                ["fas fa-list-ol", "fas fa-list-ul", "fas fa-stream"],
                ["fas fa-undo", "fas fa-redo"]
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this); 

        this.setTitleRef = this.setTitleRef.bind(this);
        this.handleTitle = this.handleTitle.bind(this); 
        
        this.toggleDropDown = this.toggleDropDown.bind(this); 
        this.handleSubBody = this.handleSubBody.bind(this); 
        this.handleText = this.handleText.bind(this); 

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

    createIcons(icons) {
        return icons.map(icon => <span className="review_icon"><i className={`${icon}`}></i></span>)
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

    toggleDisplay(e, type) {
        ['displayTitle', 'displayDescription', 'displayReview'].map(name => {
            if (name.includes(type)) {
                this.setState({
                    [name]: true
                })
            } else {
                this.setState({
                    [name]: false 
                })
            }
        })
    }

    toggleDropDown(e, idx) {
        console.log('toggleDropDown', idx); 
        this.setState({
            dr: this.changeIdx(this.state.dr, idx-1)
        })
        console.log(this.state.dr); 
    }

    changeIdx(arr, idx) {
        console.log(idx); 
        let boolean = arr[idx]; 
        return arr.map((x, i) => i === idx ? !boolean : x); 
    }

    handleText(e, idx) {
        this.setState({
            [`text${idx}`]: !this.state[`text${idx}`]
        })
    }

    render() {
        return (
            <div className="new_question_page">

                <div className="button_header">


                    <button className={this.state.displayTitle ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.toggleDisplay(e, "Title")}>Title</button>

                    <button className={this.state.displayDescription ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.toggleDisplay(e, "Description")}>Description</button>

                    <button className={this.state.displayReview ? "button_carousel_selected" : "button_carousel"}
                        onClick={(e) => this.toggleDisplay(e, "Review")}>Review</button>

                </div>

                <form className="question_form" onSubmit={this.handleSubmit}>
                    
                    {this.state.displayTitle ? 
                            <NewQuestionTitle 
                            displayTitle={(e) => this.toggleDisplay(e, "Title")} 
                            titleError={this.state.titleError}

                            setTitleRef={this.setTitleRef} 
                            handleTitle={this.handleTitle}
                            displayDescription={(e) => this.toggleDisplay(e, "Description")} /> : null }

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

                                {[1, 2, 3, 4].map(idx => (
                                    <Dropdown
                                        type={idx}
                                        dr={this.state.dr[idx]}
                                        text={this.state[`text${idx}`]}
                                        body={this.state[`body${idx}`]}
                                        goodExamples={this.state.goodExamples[idx-1]}
                                        badExamples={this.state.badExamples[idx-1]}
                                        toggleDropDown={this.toggleDropDown}
                                        handleText={this.handleText}
                                        handleSubBody={this.handleSubBody}
                                        header={this.state.headers[idx-1]}
                                        headerDetail={this.state.subHeaders[idx-1]}
                                    />
                                ))}
                                
                            </div>
                            
                            <div className="prev_next_buttons">
                                <button className="prev_button"
                                    onClick={(e) => this.toggleDisplay(e, "Title")}>
                                    Previous
                                </button>

                                <button className="next_button"
                                    onClick={(e) => this.toggleDisplay(e, "Review")}>
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


                            <div className="carousel_question_title">Title</div>
                            <input type="text"
                                className="review_title title_input input_field_error"
                                value={this.state.title}
                                onChange={(e) => this.handleTitle(e)} />
                        {this.state.titleError ? 
                            <label>
                                <div className="inline_errors">
                                    <div className="input_error_message">{this.state.titleError}</div>
                                    <i className="fas fa-exclamation-circle error_icon"></i>
                                </div>
                            </label>
                        : 
                        null}
                                    
                        <div className="review_form_before_submit">
                                {[0, 1, 2, 3].map((iconGroup, idx) => (
                                    <span key={idx} className={`group_${idx + 1}`}>
                                        {this.createIcons(this.state.textareaIcons[idx])}
                                    </span>)
                                )}
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

                            <hr className="hr" />

                            <div className="markdown_formatted_answer">
                                {this.state.body}
                            </div>
                        

                            <hr className="hr" />
                     
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