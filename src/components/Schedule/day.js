import React from "react";
import {Container, Col, Row} from 'reactstrap'
import Class from './class'


export default class Day extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        let classes = this.props.day.classes.map(function(clazz, index) {
            let className = (index % 2 != 0) ? 'schedule-class schedule-class-shade' : 'schedule-class'
            return <Class clazz={clazz} className={className} />
        })
        return (
            <Row className={'schedule-day-row'}>
                <Col className={'col-2'} />
                <Col className={'col-2 align-self-center'}>
                    <span className={'schedule-day-title'}> {this.props.day.day}</span>
                    <br/>
                    <span className={'schedule-day-type'}> {this.props.day.type}</span>
                </Col>
                <Col className={'col-6'}>
                    {classes}
                </Col>
            </Row>
        );
    }
}

