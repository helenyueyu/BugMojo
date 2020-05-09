import React from 'react'; 

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
            bodyError: 'Body cannot be blank.'
        }

        this.handleSubmit = this.handleSubmit.bind(this); 

        this.setTitleRef = this.setTitleRef.bind(this);

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
        console.log("picked", picked); 

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

    handleBody1(e) {
        this.setState({
            body1: e.target.value, 
            body: this.state.body1 + this.state.body2 + this.state.body3 + this.state.body4, 
            bodyError: this.state.body.length === 0 ? 'Body cannot be blank.' : '' 
        })
    }

    handleBody2(e) {
        this.setState({
            body2: e.target.value,
            body: this.state.body1 + this.state.body2 + this.state.body3 + this.state.body4, 
            bodyError: this.state.body.length === 0 ? 'Body cannot be blank.' : '' 
        })
    }

    handleBody3(e) {
        this.setState({
            body3: e.target.value,
            body: this.state.body1 + this.state.body2 + this.state.body3 + this.state.body4, 
            bodyError: this.state.body.length === 0 ? 'Body cannot be blank.' : '' 
        })
    }

    handleBody4(e) {
        this.setState({
            body4: e.target.value,
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

    toggleDropDown1(e) {
        this.setState({
            dr1: !this.state.dr1
        })
    }

    toggleDropDown2(e) {
        this.setState({
            dr2: !this.state.dr2
        })     
    }

    toggleDropDown3(e) {
        this.setState({
            dr3: !this.state.dr3
        })
    }

    toggleDropDown4(e) {
        this.setState({
            dr4: !this.state.dr4
        })
    }

    handleText1(e) {
        this.setState({
            text1: !this.state.text1 
        })
    }

    handleText2(e) {
        this.setState({
            text2: !this.state.text2 
        })
    }

    handleText3(e) {
        this.setState({
            text3: !this.state.text3 
        })
    }

    handleText4(e) {
        this.setState({
            text4: !this.state.text4
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
                    
                    {this.state.displayTitle ? 

                    <div className="carousel_body">
                        <h1 className="carousel_header">What's your question title?</h1>
                        <h2 className="carousel_subheader">Your title helps people quickly understand what your question is about so they can answer it.</h2>

                        <div className="carousel_example_1">
                            <div className="hypothetical">Imagine you’re asking a question to another developer.</div>
                                <div className="hypothetical_example">For example: </div>
                            <ul>
                                <div className="separator_top">
                                        <li><i className="fas fa-check carousel_check"></i>
                                            “Is there an R function for finding the index of an element in a vector?”
                                        </li>
                                        <li><i className="fas fa-times carousel_x"></i>
                                            “Please help with R”
                                        </li>
                                </div>

                                <div className="separator_bottom">
                                        <li><i className="fas fa-check carousel_check"></i>
                                            “How to fix ‘Headers already sent’ error in PHP”
                                        </li>
                                        <li><i className="fas fa-times carousel_x"></i>
                                            “PHP error: Why isn’t this working?”
                                        </li>
                                </div>
                            </ul>
                        </div>
                            <label><div className="carousel_question_title">Title</div>

                            {this.state.titleError ? 
                                    
                                    <label>
                                <input type="text"
                                    className="title_input input_field_error"
                                    value={this.state.title}
                                        placeholder="What's your programming question? Be specific."
                                    onChange={(e) => this.handleTitle(e)}
                                    ref={this.setTitleRef} />


                                <div className="inline_errors">
                                    <div className="input_error_message">{this.state.titleError}</div>
                                    <i className="fas fa-exclamation-circle error_icon"></i>
                                </div>
                                </label>
                                :
                                <input type="text"
                                    className="title_input"
                                    value={this.state.title}
                                    placeholder="What's your programming question? Be specific."
                                    onChange={(e) => this.handleTitle(e)}
                                    ref={this.setTitleRef} />}

                            </label>

                            <div className="prev_next_buttons">
                                {this.state.titleError ? 
                                
                                <button className="disabled_next_button"
                                    onClick={(e) => this.displayDescription(e)}
                                    disabled={true}>
                                    Next
                                </button>
                                : 
                                <button className="next_button"
                                        onClick={(e) => this.displayDescription(e)}>
                                        Next
                                </button>
                                }
                            </div>
                    </div>

                    : null }

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
                                    <span className="guided_dropdown_link">Links</span>
                                    <span className="guided_dropdown_link">Images</span>
                                    <span className="guided_dropdown_link">Styling/Headers</span>
                                    <span className="guided_dropdown_link">Lists</span>
                                    <span className="guided_dropdown_link">Blockquotes</span>
                                    <span className="guided_dropdown_link">Code</span>
                                    <span className="guided_dropdown_link">HTML</span>
                                </div>
                                <div className={this.state.text1 ? "big_div2" : "big_div"}>
                                <div className="dr1"
                                        onClick={(e) => this.toggleDropDown1(e)}>1. Summarize the problem
                                        
                                        <span className="plus_minus">{this.state.dr1 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                        
                                        </div>
                                {this.state.dr1 ? 

                                <div>
                                        <textarea value={this.state.body1}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody1(e)} 
                                            onFocus={(e)=> this.handleText1(e)}
                                            onBlur={(e) => this.handleText1(e)}
                                            autoFocus="autofocus"/> 

                                            <div className="input_below_example">

                                                <div className="header_detail">Include details about your goals and problem</div>

                                            <div className="separator_bottom">
                                                <li><i className="fas fa-check carousel_check"></i>
                                                    “I’m setting up a new server, and want to support UTF-8 fully in my web application. Where do I need to set the encoding/charsets?”
                                            </li>
                                                <li><i className="fas fa-times carousel_x"></i>
                                                    “I want to support UTF-8 fully in my web application.”
                                        </li>
                                            </div>

                                            </div>
                                </div>   
                                : 
                                null}
                                </div>


                                <div className={this.state.text2 ? "big_div2" : "big_div"}>
                                <div className="dr2"
                                    onClick={(e) => this.toggleDropDown2(e)}>2. Provide background including what you've already tried 
                                        
                                    <span className="plus_minus">{this.state.dr2 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr2 ?

                                    <div>
                                        <textarea value={this.state.body2}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody2(e)}
                                            onFocus={(e) => this.handleText2(e)}
                                            onBlur={(e) => this.handleText2(e)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                                <div className="header_detail">Include any research you've conducted</div>

                                            <div className="separator_bottom">
                                                <li><i className="fas fa-check carousel_check"></i>
                                                   “This is for a new Linux server, running MySQL 5, PHP 5 and Apache 2. In the past, I’ve tried on existing servers and always seem to end up having to fall back to ISO-8859-1.”
                                            </li>
                                                <li><i className="fas fa-times carousel_x"></i>
                                                    “This for a new server. In the past, I’ve tried on existing servers.”
                                        </li>
                                            </div>

                                        </div>
                                    </div>
                                    :
                                    null}
                                    </div>

                                <div className={this.state.text3 ? "big_div2" : "big_div"}>
                                <div className="dr3"
                                    onClick={(e) => this.toggleDropDown3(e)}>3. Show some code
                                        
                                    <span className="plus_minus">{this.state.dr3 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr3 ?

                                    <div>
                                        <textarea value={this.state.body3}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody3(e)}
                                            onFocus={(e) => this.handleText3(e)}
                                            onBlur={(e) => this.handleText3(e)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                                <div className="header_detail">Share the minimum amount of code others need to reproduce your problem (also called a minimal, reproducible example)</div>

                                            <div className="separator_bottom">
                                                <li><i className="fas fa-check carousel_check"></i>
                                                    Use code fences and syntax highlighting to format your code properly and provide context
                                            </li>
                                                    <li><i className="fas fa-times carousel_x"></i>
                                                        Don’t paste an entire file
                                        </li>
                                            
                                                <li><i className="fas fa-times carousel_x"></i>
                                                    Don't paste just one line
                                        </li>
                                            </div>

                                        </div>
                                    </div>
                                    :
                                    null}
                                    </div>

                                <div className={this.state.text4 ? "big_div2" : "big_div"}>
                                <div className="dr4"
                                    onClick={(e) => this.toggleDropDown4(e)}>4. Describe expected and actual results including any error messages
                                        
                                    <span className="plus_minus">{this.state.dr4 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr4 ?

                                    <div>
                                        <textarea value={this.state.body4}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody4(e)}
                                            onFocus={(e) => this.handleText4(e)}
                                            onBlur={(e) => this.handleText4(e)}
                                            autoFocus="autofocus" />

                                        <div className="input_below_example">

                                

                                            <div className="separator_bottom">
                                                <li><i className="fas fa-check carousel_check"></i>
                                                    “I expect the output of 5/2 to be 2.5, but the actual output is 2.”
                                            </li>
                                                <li><i className="fas fa-times carousel_x"></i>
                                                    “The output is 2.5, but that is wrong.”
                                        </li>
                                            </div>

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
                                <span className="guided_dropdown_link">Links</span>
                                <span className="guided_dropdown_link">Images</span>
                                <span className="guided_dropdown_link">Styling/Headers</span>
                                <span className="guided_dropdown_link">Lists</span>
                                <span className="guided_dropdown_link">Blockquotes</span>
                                <span className="guided_dropdown_link">Code</span>
                                <span className="guided_dropdown_link">HTML</span>
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