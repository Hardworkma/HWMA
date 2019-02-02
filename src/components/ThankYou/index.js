import React from 'react';
import {Row} from 'reactstrap'


export default class ThankYou extends React.PureComponent {
    render() {
        return (
            <div id='blackbelt' className={'container'}>
                <img id='blackbelt-img' src='https://s3.amazonaws.com/hwma-images/black_belt.jpg' alt={"black belt"}/>
                <div className={'container-center'}>Thank You.</div>
            </div>

        );
    }
}