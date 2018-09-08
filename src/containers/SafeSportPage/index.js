import React from 'react'
import Title from '../../components/Title/index';
import SafeSport from "../../components/SafeSport";

export default class PhilosophyPage extends React.PureComponent {
    render() {
        return (
            <div className={'default-container'}>
                <Title title={'About SafeSport'}/>
                <SafeSport/>
            </div>
        )
    }
}