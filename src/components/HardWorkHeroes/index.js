import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Taekwondo extends React.PureComponent {
    render() {
        return(
            <Row>
                <Col className={'text-format'}>
                    Our Heroes program is for children who are still too young for our traditional curriculum,
                    but still want to learn valuable martial arts skills, both mental and physical. Students
                    practice blocks, strikes, kicks, stances, and the other traditional values of martial arts
                    such as self control, respect, discipline, and hard work. Along with this, Heroes students
                    get to play games that are focused on developing hand eye coordination, footwork, and
                    other major motor skills that are complimentary to both martial arts, and any other
                    endeavors they may pursue as they grow. The goal is a fun and exciting class with serious
                    skills and fun activities to help our younger students become truly prepared for their
                    martial arts journey.
                    <br/>
                    <br/>
                    This programs is for children 4-6, and combines martial arts skills, and major motor
                    skill focuses to provide a fun curriculum that builds younger students skills which they
                    can use throughout their lives.
                    <br/>
                    <br/>
                </Col>
            </Row>
        );
    }
}