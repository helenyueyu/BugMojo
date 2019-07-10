import React from 'react'; 
import './new_question.css'; 

class NewQuestion extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: '', 
            body: '', 
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
            text4: false 
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createQuestion(this.state)
            .then(() => this.props.history.push(`/questions`))
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleBody(e) {
        this.setState({
            body: e.target.value 
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

    render() {
        console.log(this.props.userId)
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
                                <input type="text"
                                    className="title_input"
                                    value={this.state.title}
                                        placeholder="What's your programming question? Be specific."
                                    onChange={(e) => this.handleTitle(e)} />
                            </label>

                            <button className="next_button"
                                onClick={(e) => this.displayDescription(e)}>
                                    Next
                            </button>
                    </div>

                    : null }

                    {this.state.displayDescription ? 

                        <div className="carousel_body">
                            <h1 className="carousel_header">Tell us more about your question</h1>
                            <h2 className="carousel_subheader">Your description gives people the information they need to help you answer your question.</h2>

                            <div className="carousel_tagline"><i className="fa fa-question-circle" aria-hidden="true"></i><span className="bold_help">Want more help?</span> Check out these examples of great question descriptions: 
                                <a href="https://stackoverflow.com/questions/50464314/why-isnt-an-animation-flipped-horizontally-when-i-call-setflippedtrue" style={{marginLeft: '0.25rem'}}>Example 1</a>,
                                <a href="https://stackoverflow.com/questions/50378884/when-catch-doesnt-actually-catch-anything" style={{marginLeft: '0.25rem'}}>Example 2</a>
                            </div>

                            <div className="dropdown_rows">
                                

                                <div className="guided_mode">Guided Mode</div>
                                <div className={this.state.text1 ? "big_div2" : "big_div"}>
                                <div className="dr1"
                                        onClick={(e) => this.toggleDropDown1(e)}>1. Summarize the problem
                                        
                                        <span className="plus_minus">{this.state.dr1 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                        
                                        </div>
                                {this.state.dr1 ? 

                                <div>
                                        <textarea value={this.state.body}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody(e)} 
                                            onFocus={(e)=> this.handleText1(e)}
                                            onBlur={(e) => this.handleText1(e)}/> 

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
                                    onClick={(e) => this.toggleDropDown2(e)}>1. Summarize the problem
                                        
                                    <span className="plus_minus">{this.state.dr2 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr2 ?

                                    <div>
                                        <textarea value={this.state.body}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody(e)}
                                            onFocus={(e) => this.handleText2(e)}
                                            onBlur={(e) => this.handleText2(e)} />

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

                                <div className={this.state.text3 ? "big_div2" : "big_div"}>
                                <div className="dr3"
                                    onClick={(e) => this.toggleDropDown3(e)}>1. Summarize the problem
                                        
                                    <span className="plus_minus">{this.state.dr3 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr3 ?

                                    <div>
                                        <textarea value={this.state.body}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody(e)}
                                            onFocus={(e) => this.handleText3(e)}
                                            onBlur={(e) => this.handleText3(e)} />

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

                                <div className={this.state.text4 ? "big_div2" : "big_div"}>
                                <div className="dr4"
                                    onClick={(e) => this.toggleDropDown4(e)}>1. Summarize the problem
                                        
                                    <span className="plus_minus">{this.state.dr4 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                                    
                                    </div>
                                {this.state.dr4 ?

                                    <div>
                                        <textarea value={this.state.body}
                                            className="dropdown_textarea"
                                            onChange={(e) => this.handleBody(e)}
                                            onFocus={(e) => this.handleText4(e)}
                                            onBlur={(e) => this.handleText4(e)} />

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

                            </div>
                            
                           

                            <button className="next_button"
                                onClick={(e) => this.displayDescription(e)}>
                                Next
                            </button>
                        </div>
                    : 
                    null }

                    

                    {this.state.displayReview ? 
                    <input type="submit" value="Create Question" />
                    : null } 
                    
                </form>
            </div>
        )
    }
}

export default NewQuestion; 