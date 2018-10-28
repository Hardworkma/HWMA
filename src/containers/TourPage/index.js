import React from 'react';
import {Col, Row} from 'reactstrap'
import Tour from '../../components/Tour/index'
import Title from "../../components/Title";
import pano_1_thumb from "../../images/PANO_1_Thumb.jpg";
import pano_2_thumb from "../../images/PANO_2_Thumb.jpg";

export default class TourPage extends React.PureComponent {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <Row className={'wrapper'}>
                    <div className={'card faq-card'}>
                        <Title title={'Tour the School'}/>
                        <Tour />
                        <br/>
                        <br/>
                    </div>
                </Row>

            </div>
        );
    }
}