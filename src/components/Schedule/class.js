import React from "react";
import {Container, Col, Row} from 'reactstrap'

export default class Class extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row className={this.props.className}>
                <Col className={'col-3'}>{this.props.clazz.time}</Col>
                <Col className={'col-6'}>{this.props.clazz.clazz}</Col>
            </Row>
        );
    }
}