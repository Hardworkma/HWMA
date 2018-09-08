import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import SideKicks from '../../components/SideKicks/index';

export default class SideKicksPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Side Kicks'}/>
                        <SideKicks/>
                    </div>
                </Row>
            </div>
        )
    }
}