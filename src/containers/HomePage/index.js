import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import FreeTrial from '../../components/FreeTrial/index';
import Home from '../../components/Home/index'
import Twitter from "../../components/Twitter";
import Instagram from "../../components/Instagram";
import Title from '../../components/Title/index';

import { Pannellum } from '360-react-pannellum'

import PANO_1 from '../../images/PANO_1.jpg'

export default class HomePage extends React.PureComponent {
    render() {
        let cardLeft = (window.innerWidth < 400) ? 'card' : 'card card-left'
        let cardRight = (window.innerWidth < 400) ? 'card' : 'card card-right'

        return (
            <div>
                <FreeTrial className={'free-trial-modal'}/>
                <Row className={'home'}>
                    <Home/>
                </Row>
                <Row className={'wrapper'}>
                    <div className={cardLeft}>
                        <Title title={'Welcome'}/>
                        <br/>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/10D45JTg2W8"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className={cardRight}>
                        <Title title={'Announcements'}/>
                        <br/>
                        <Twitter/>
                    </div>
                </Row>
                <div className={'ig-feed'}>
                    <Instagram />
                </div>
                <Pannellum
                    width='100%'
                    height='200px'
                    imagePath={PANO_1}
                    isDisplayCloseButton={false}
                    showZoomCtrl={false}
                    showFullscreenCtrl={false}
                    autoLoad />
            </div>
        )
    }
}