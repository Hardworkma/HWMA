import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import HardWorkHeroes from '../../components/HardWorkHeroes/index';

export default class HardWorkHeroesPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Hard Work Heroes'}/>
                        <HardWorkHeroes/>
                    </div>
                </Row>
            </div>
        )
    }
}