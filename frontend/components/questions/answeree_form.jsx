import React from 'react'; 

class AnswereeForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            body: null, 
            textareaIcons: [
                ["fas fa-bold", "fas fa-italic"], 
                ["fas fa-link", "fas fa-quote-left", "fas fa-code", "far fa-image", "far fa-file-code"], 
                ["fas fa-list-ol", "fas fa-list-ul", "fas fa-stream"], 
                ["fas fa-undo", "fas fa-redo"]
            ]
        }
    }

    createIcons(icons) {
        return icons.map(icon => <span className="review_icon"><i className={`${icon}`}></i></span>)
    }

    render() {
        return (
            <form className="answeree_form" onSubmit={this.props.handleSubmit}>

                <div className="review_form_before_submit_answer">
                    {[0, 1, 2, 3].map((iconGroup, idx) => (
                        <span key={idx} className={`group_${idx}`}>
                            {this.createIcons(this.state.textareaIcons[idx])}
                        </span>)
                    )}
                </div>

                <textarea className="edit_body_field_2"
                    value={this.state.answer}
                    onChange={(e) => this.props.handleAnswer(e)} />

                <button className="next_button" onClick={this.props.handleSubmit}>
                    Post Your Answer
                </button>
            </form>
        )
    }
}

export default AnswereeForm; 

