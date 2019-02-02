import React from 'react';
import {Col, Row} from 'reactstrap'
import SocialMediaLink from "../SocialMediaLink";
import Address from "../Address";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";

export default class Footer extends React.PureComponent {
    render() {
        if(typeof(window) !== "undefined") {
            console.log(window.location.href)
        }
        let footerClass = (typeof(window) !== "undefined" && window.location.href.includes('/thankyou')) ? 'footer footer-thankyou' : 'footer'
        return(
            <div id='footer' className={footerClass}>
                <Row  >
                    <div className={'footer-bar-gradiant'}></div>
                    <div className={'footer-logo'}>
                        <img src='https://s3.amazonaws.com/hwma-images/icon-orange.png' />
                    </div>

                </Row>
                <Row>
                    <Address containerClass={'footer-address-container'}
                             addClass={'footer-address'}
                             add1Class={'footer-address-1'}
                             phoneClass={'footer-phone'}
                             emailClass={'footer-email'}/>
                </Row>
                <Row>
                    <SocialMediaLink className={'fab social-link fa-2x fa-facebook-f social-link-fb'} URL={'http://www.facebook.com/HardWorkMA'}/>
                    <SocialMediaLink className={'fab social-link fa-2x fa-twitter social-link-twitter'} URL={'http://twitter.com/HardWorkMarArts'}/>
                    <SocialMediaLink className={'fab social-link fa-2x fa-instagram social-link-ig'} URL={'http://www.instagram.com/hardworkma/'}/>
                </Row>
            </div>

        );
    }
}