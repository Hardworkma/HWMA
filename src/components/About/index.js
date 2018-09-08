import React from 'react';
import {Container, Col, Row} from 'reactstrap'
import Title from '../../components/Title/index';
import CoreValues from "../CoreValues";
import Philosophy from "../Philosophy";

export default class About extends React.PureComponent {
    render() {
        return(
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-double card-text'} style={{marginLeft:'2%'}}>
                        <Title title={'Core Values'} layout={this.props.layout}/>
                        <br/>
                        <CoreValues/>
                    </div>
                    <div className={'card card-double card-text'}>
                        <Title title={'Philosophy'} layout={this.props.layout}/>
                        <br/>
                        <Philosophy/>
                    </div>
                </Row>
            </div>
        )
    }
}