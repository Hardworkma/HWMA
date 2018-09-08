import React from 'react';
import {Container, Col, Row} from 'reactstrap'
import Reviews from '../../components/Reviews/index'
import Title from "../../components/Title";

export default class ReviewsPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Reviews'}/>
                        <Row>
                            <Col xs={2}></Col>
                            <Col xs={8}><Reviews/></Col>
                            <Col xs={2}></Col>
                        </Row>
                    </div>
                </Row>
            </div>

        );
    }
}