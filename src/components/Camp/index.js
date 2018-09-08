import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Camp extends React.PureComponent {
    render() {
        return(
            <Row>
                <Col className={'text-format'}>
                    Our Summer Camp Program is extremely popular, with the same martial arts training and
                    curriculum that can be found in our traditional taekwondo classes and after school
                    programs. In addition, our all day summer camp has time for interactive group games,
                    sports, and field trips of many different types. We also try to partner with other sports
                    activities so students can see how their martial arts training has helped them develop
                    the skills to pursue any number of other sports and activities.
                    <br/>
                    <br/>
                    Along with our Summer Camp Program, we are also offering Winter and Spring Camp Programs.
                    These camp programs have a limited number to maintain a high quality program,
                    so register early!
                    <br/>
                    <br/>​
                    These programs are for students aged from kindergarten to middle school, with internship
                    opportunities for students upon request.
                    <br/>
                    <br/>
                </Col>
            </Row>
        );
    }
}