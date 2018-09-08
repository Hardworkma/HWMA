import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import Afterschool from "../../components/Afterschool/index";

export default class AfterschoolPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Afterschool'}/>
                        <Afterschool/>
                    </div>
                </Row>
            </div>
        )
    }
}