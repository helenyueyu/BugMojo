import React from 'react';
import moment from 'moment';


class UserBox extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBadge(medal, number) {
        return (
            <>
                <div className={`${medal}_badge`}><span>&#8226;</span></div>
                <div style={{ color: 'gray' }}>{number}</div>
            </>
        )
    }

    render() {
        if (this.props.item && this.props.image) {
            console.log(this.props.item)
            return (
                <div className={this.props.type === "question" ? "askee_box" : "answeree_box"}>
                    <div className="askee_box_time">asked {moment(this.props.item.createdAt).fromNow()}</div>
                    <div className="askee_box_identicon_username_flex">
                        <img className="askee_box_identicon" src={this.props.image} alt="identicon" />
                        <div className="askee_box_username_medals_flex">
                            <div className="askee_username">USERNAME</div>
                            <div className="medal_row_list">

                                <div className="reputation">{15}</div>
                                {[["gold", 7], ["silver", 12], ["bronze", 29]].map(badge => this.renderBadge(badge[0], badge[1]))}
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

export default UserBox; 