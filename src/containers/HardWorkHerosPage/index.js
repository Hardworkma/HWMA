import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import HardWorkHeros from '../../components/HardWorkHeros/index';

export default class HardWorkHerosPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Hard Work Heros'}/>
                        <HardWorkHeros/>
                    </div>
                </Row>
            </div>
        )
    }
}