import React from 'react'
import Title from '../../components/Title/index';
import Schedule from '../../components/Schedule/index';

export default class HardWorkHerosPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Title title={'Schedule'}/>
                <Schedule/>
            </div>
        )
    }
}