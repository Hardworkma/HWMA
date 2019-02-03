import React from "react";
import {Container, Col, Row} from 'reactstrap'
import Class from './class'


export default class Day extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.day.classes)

        let classes = this.props.day.classes.map(function(clazz, index) {
            let className = (index % 2 != 0) ? 'schedule-class schedule-class-shade' : 'schedule-class'
            return <Class clazz={clazz} className={className} />
        })
        return (
            <Row className={'schedule-day'}>
                <Col className={'col-2'} />
                <Col className={'col-3'}>
                    <Row>
                        <Col>{this.props.day.day}</Col>
                    </Row>
                    <Row>
                        <Col>{this.props.day.type}</Col>
                    </Row>
                </Col>
                <Col className={'col-6'}>
                    {classes}
                </Col>
                <Col className={'col-1'} />
            </Row>
        );
    }
}

