import React from 'react';
import {Col, Row} from 'reactstrap'

export default class SideKicks extends React.PureComponent {
    render() {
        return(
            <Row>
                <Col className={'text-format'}>
                    Our Sidekicks program is for the youngest among us. The classes are high energy, fun, and
                    engaging, with a focus on very simple skills and mental and physical development.
                    <br/>
                    <br/>
                    This program is for students aged 3 to 4 years old, who are not yet ready for our Heroes
                    program. It provides a very simple curriculum focused on flexibility and major motor
                    skills development, along with fun and very simple martial arts drills to help prepare
                    them for our other programs.
                    <br/>
                    <br/>
                </Col>
            </Row>
        );
    }
}