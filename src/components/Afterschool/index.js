import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Afterschool extends React.PureComponent {
    render() {
        return(
            <Row>
                <Col className={'text-format'}>
                    Picking up from our local schools, students are provided transportation back to the
                    facility where they are provided martial arts lessons, games and time for homework and
                    other school related activities. Providing a more structured and positive alternative to
                    standard after school programs.
                    <br/>
                    <br/>​
                    This program is for kindergarten to elementary aged students of the nearby surrounding
                    schools. We operate on the Loudoun County Public Schools schedule, but if your student
                    attends a private school, we may able to accommodate. The program taught is the same as
                    our traditional taekwondo program, and are held to the same standards. Students can
                    expect to be given exceptional training, along with time to grow mentally and focus on
                    their studies.
                    <br/>
                    <br/>
                </Col>
            </Row>
        );
    }
}