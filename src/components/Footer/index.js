import React from 'react';
import {Col, Row} from 'reactstrap'
import Logo from '../../images/icon-orange.png'
import SocialMediaLink from "../SocialMediaLink";
import Address from "../Address";

export default class Footer extends React.PureComponent {
    render() {
        let fb_style = {left:'42%'};
        let twitter_style = {left:'47%'}
        let ig_style = {left:'53%'}
        return(
            <div id='footer' className={'footer'}>
                <Row  >
                    <div className={'footer-bar-gradiant'}></div>
                    <div className={'footer-logo'}>
                        <img src={Logo} />
                    </div>
                    <div>
                        <SocialMediaLink type={'facebook'} style={fb_style} URL={'http://www.facebook.com/HardWorkMA'}/>
                        <SocialMediaLink type={'twitter'} style={twitter_style} URL={'http://twitter.com/HardWorkMarArts'}/>
                        <SocialMediaLink type={'instagram'} style={ig_style} URL={'http://www.instagram.com/hardworkma/'}/>
                    </div>
                    <Address />
                </Row>
            </div>

        );
    }
}