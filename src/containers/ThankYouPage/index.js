import React from 'react';
import {Row} from 'reactstrap'
import ThankYou from '../../components/ThankYou'
import Home from "../../components/Home";


export default class ThankYouPage extends React.PureComponent {
    render() {
        return (
            <Row className={'home'}>
                <ThankYou/>
            </Row>

        );
    }
}