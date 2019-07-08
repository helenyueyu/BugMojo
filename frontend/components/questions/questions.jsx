import React from 'react'

class Questions extends React.Component {
    componentDidMount() {
        this.props.fetchAllQuestions()
    }

    render() {
        return (
            <div>
                <h1>Questions</h1>
               {this.props.questions && this.props.questions.map(question => <li>{question.title}</li>)}
            </div>
        )
    }
}

export default Questions; 