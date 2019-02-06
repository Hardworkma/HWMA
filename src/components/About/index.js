import React from 'react';
import { Row} from 'reactstrap'
import Title from '../../components/Title/index';
import CoreValues from "../CoreValues";
import Philosophy from "../Philosophy";
import {isMobile} from 'react-device-detect';

export default class About extends React.PureComponent {
    render() {
        let classes = (isMobile && window.innerWidth < 480) ? 'card card-text' :  'card card-double card-text'
        return(
            <div>
                <Row className={'wrapper'}>
                    <div className={classes}>
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