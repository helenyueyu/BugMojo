import React from 'react';
import moment from 'moment';


class AskeeBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.question && this.props.image) {
            return (
                <div className="askee_box">
                    <div className="askee_box_time">asked {moment(this.props.question.createdAt).fromNow()}</div>
                    <div className="askee_box_identicon_username_flex">
                        <img className="askee_box_identicon" src={this.props.image} alt="identicon" />
                        <div className="askee_box_username_medals_flex">
                            <div className="askee_username">USERNAME</div>
                            <div className="medal_row_list">

                                <div className="reputation">{15}</div>
                                <>
                                    <div className="gold_badge"><span>&#8226;</span></div>
                                    <div style={{ color: 'gray' }}>{34}</div>
                                </>
                                <>
                                    <div className="silver_badge"><span>&#8226;</span></div>
                                    <div style={{ color: 'gray' }}>{33}</div>
                                </>

                                <>
                                    <div className="bronze_badge"><span>&#8226;</span></div>
                                    <div style={{ color: 'gray' }}>{35}</div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default AskeeBox; 