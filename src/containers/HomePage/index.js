import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import FreeTrial from '../../components/FreeTrial/index';
import Home from '../../components/Home/index'
import Twitter from "../../components/Twitter";
import Instagram from "../../components/Instagram";
import Title from '../../components/Title/index';

export default class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <FreeTrial/>
                <Row className={'home_2'}>
                    <Home/>
                </Row>
                <Row className={'wrapper'}>
                    <div className={'card card-left'}>
                        <Title title={'Welcome'}/>
                        <br/>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/LH1GFaw09hk"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className={'card card-right'}>
                        <Title title={'Announcements'}/>
                        <br/>
                        <Twitter/>
                    </div>
                </Row>
                <div className={'ig-feed'}>
                    <Instagram />
                </div>
            </div>
        )
    }
}