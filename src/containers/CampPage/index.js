import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import Camp from "../../components/Camp/index";

export default class AfterschoolPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Camp'}/>
                        <Camp/>
                    </div>
                </Row>
            </div>
        )
    }
}