import React from 'react';
import {Row} from 'reactstrap'
import Welcome from '../../components/Welcome/index'
import Title from "../../components/Title";

export default class WelcomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={'Welcome Letter'}/>
                        <Welcome />
                    </div>
                </Row>
            </div>

        );
    }
}