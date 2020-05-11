import React from 'react'; 

class NewQuestionTitle extends React.Component {
    render() {
        console.log("props", this.props); 

        return (
            <>
            {
                this.props.displayTitle ?

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

                            {this.props.titleError ?

                                <label>
                                    <input type="text"
                                        className="title_input input_field_error"
                                        value={this.props.title}
                                        placeholder="What's your programming question? Be specific."
                                        onChange={(e) => this.props.handleTitle(e)}
                                        ref={this.props.setTitleRef} />


                                    <div className="inline_errors">
                                        <div className="input_error_message">{this.props.titleError}</div>
                                        {/* <div className="input_error_message">{"banana"}</div> */}

                                        <i className="fas fa-exclamation-circle error_icon"></i>
                                    </div>
                                </label>
                                :
                                <input type="text"
                                    className="title_input"
                                    value={this.props.title}
                                    placeholder="What's your programming question? Be specific."
                                    onChange={(e) => this.props.handleTitle(e)}
                                    ref={this.props.setTitleRef} />}

                        </label>

                        <div className="prev_next_buttons">
                            {this.props.titleError ?

                                <button className="disabled_next_button"
                                    onClick={(e) => this.props.displayDescription(e)}
                                    disabled={true}>
                                    Next
                                </button>
                                :
                                <button className="next_button"
                                    onClick={(e) => this.props.displayDescription(e)}>
                                    Next
                                </button>
                            }
                        </div>
                    </div>

                    : null
            }
            </>
        )
    }
}

export default NewQuestionTitle; 