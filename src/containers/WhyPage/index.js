import React from 'react';
import {Row} from 'reactstrap'
import Title from "../../components/Title";
import Why from "../../components/Why";

export default class WhyPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={''}>
                    <div className={''}>
                        <Title title={'Why HWMA?'} />
                        <div style={{paddingBottom: '25px'}}></div>
                        <Why/>
                    </div>
                </Row>
            </div>
        );
    }
}