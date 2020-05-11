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
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginRight: '0.2rem', marginTop: '0.2rem', marginRight: '0.5rem' }} width="35px" height="35px" src={this.props.image} alt="identicon" />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ color: '#0076cb', fontSize: '0.9rem' }}>USERNAME GOES HERE</div>
                            <div style={{ display: 'flex', flexDirection: 'row', transform: 'translateY(-3px)', fontSize: '0.8rem' }}>

                                <div style={{ color: 'gray', fontWeight: 'bold' }}>{Math.floor(Math.random() * 10)}</div>

                                <>
                                    <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#ffcf0f', opacity: 0.8 }}>
                                        <span>&#8226;</span>
                                    </div>
                                    <div style={{ color: 'gray' }}>{34}</div>
                                </>


                                <>
                                    <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#A8A8A8', opacity: 0.8 }}>
                                        <span>&#8226;</span>
                                    </div>
                                    <div style={{ color: 'gray' }}>{33}</div>
                                </>



                                <>
                                    <div style={{ marginLeft: '0.45rem', marginRight: '0.2rem', transform: 'translateY(-6px)', fontSize: '1.3rem', color: '#965A38', opacity: 0.8 }}>
                                        <span>&#8226;</span>
                                    </div>
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