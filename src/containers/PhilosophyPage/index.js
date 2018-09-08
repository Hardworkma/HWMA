import React from 'react'
import Title from '../../components/Title/index';
import Philosophy from "../../components/Philosophy";

export default class PhilosophyPage extends React.PureComponent {
    render() {
        return (
            <div className={'default-container'}>
                <Title title={'Hard Work Martial Arts Philosophy'}/>
                <Philosophy/>
            </div>
        )
    }
}