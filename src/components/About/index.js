import React from 'react';
import {Container, Col, Row} from 'reactstrap'
import Title from '../../components/Title/index';
import CoreValues from "../CoreValues";
import Philosophy from "../Philosophy";

export default class About extends React.PureComponent {
    render() {
        let classes = (window.innerWidth < 400) ? 'card card-text' :  'card card-double card-text'
        return(
            <div>
                <Row className={'wrapper'}>
                    <div className={classes} style={{marginLeft:'2%'}}>
                        <Title title={'Core Values'}/>
                        <br/>
                        <CoreValues/>
                    </div>
                    <div className={classes}>
                        <Title title={'Philosophy'}/>
                        <br/>
                        <Philosophy/>
                    </div>
                </Row>
            </div>
        )
    }
}