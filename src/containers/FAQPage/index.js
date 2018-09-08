import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import FAQ from "../../components/FAQ";

export default class FAQPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={''}>
                    <div className={''}>
                    <Title title={'FAQ'} />
                        <div style={{paddingBottom: '25px'}}></div>
                    <FAQ/>
                    </div>
                </Row>
            </div>
        )
    }
}