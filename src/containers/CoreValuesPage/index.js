import React from 'react'
import Title from '../../components/Title/index';
import CoreValues from "../../components/CoreValues";

export default class CoreValuesPage extends React.PureComponent {
    render() {

        return (
            <div className={'default-container'}>
                <Title title={'Core Values'}/>
                <CoreValues/>
            </div>
        )
    }
}