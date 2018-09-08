import React from 'react';
import {Col, Row} from 'reactstrap'
import Logo from '../../images/icon-orange.png'
import SocialMediaLink from "../SocialMediaLink";
import Address from "../Address";

export default class Footer extends React.PureComponent {
    render() {
        return(
            <div id='footer' className={'footer'}>
                <Row  >
                    <div className={'footer-bar-gradiant'}></div>
                    <div className={'footer-logo'}>
                        <img src={Logo} />
                    </div>
                    <div>
                        <SocialMediaLink className={'fab social-link fa-2x fa-facebook-f social-link-fb'} URL={'http://www.facebook.com/HardWorkMA'}/>
                        <SocialMediaLink className={'fab social-link fa-2x fa-twitter social-link-twitter'} URL={'http://twitter.com/HardWorkMarArts'}/>
                        <SocialMediaLink className={'fab social-link fa-2x fa-instagram social-link-ig'} URL={'http://www.instagram.com/hardworkma/'}/>
                    </div>
                    <Address />
                </Row>
            </div>

        );
    }
}