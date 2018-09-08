import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Title extends React.PureComponent {
    render(){
        const textFormat = {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '25px'
        }
        let clazz = 'title_' + this.props.layout;
        return (
            <div style={textFormat}>
                <h2 className={clazz}>{this.props.title}</h2>
            </div>
        )
    }
}