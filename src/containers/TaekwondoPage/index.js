import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import Taekwondo from '../../components/Taekwondo/index';

export default class TaekwondoPage extends React.PureComponent {
    render() {

        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Taekwondo'}/>
                        <Taekwondo/>
                    </div>
                </Row>
            </div>
        )
    }
}