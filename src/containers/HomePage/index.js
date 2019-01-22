import React from 'react'
import {Row} from 'reactstrap'
import FreeTrial from '../../components/FreeTrial/index';
import Home from '../../components/Home/index'
import Twitter from "../../components/Twitter";
import Instagram from "../../components/Instagram";
import Title from '../../components/Title/index';

export default class HomePage extends React.PureComponent {
    render() {
        // let cardLeft = (window.innerWidth < 400) ? 'card' : 'card card-left'
        // let cardMiddle = (window.innerWidth < 400) ? 'card' : 'card card-middle'
        // let cardRight = (window.innerWidth < 400) ? 'card' : 'card card-right'

        let cardLeft = 'card card-left'
        let cardMiddle = 'card card-middle'
        let cardRight = 'card card-right'

        return (
            <div>
                <Row className={'home'}>
                    <Home/>
                </Row>
                <Row className={'wrapper'}>
                    <div className={cardLeft}>
                        <Title title={'Free Trial'}/>
                        <br/>
                        <FreeTrial/>
                    </div>
                    <div className={cardMiddle}>
                        <Title title={'Welcome'}/>
                        <br/>
                        <iframe width="100%" height="550" src="https://www.youtube.com/embed/10D45JTg2W8"
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
            </div>
        )
    }
}