import React from 'react'
import {Row} from 'reactstrap'
import Home from '../../components/Home/index'
import Twitter from "../../components/Twitter";
import Instagram from "../../components/Instagram";
import Title from '../../components/Title/index';

export default class HomePage extends React.PureComponent {
    render() {
        let cardMiddle = (typeof(window) !== "undefined" && window.innerWidth < 400) ? 'card' : 'card card-middle'
        let cardRight = (typeof(window) !== "undefined" && window.innerWidth < 400) ? 'card' : 'card card-right'


        return (
            <div>
                <Row className={'home'}>
                    <Home/>
                </Row>
                <Row className={'wrapper'}>
                    <div className={cardMiddle}>
                        <Title title={'Welcome'}/>
                        <br/>
                        <iframe width="100%" height="550" src="https://www.youtube.com/embed/qX7r_DqP8v0"
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