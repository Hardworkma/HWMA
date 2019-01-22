import React from 'react';
import {Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom'

import Menu from '../Menu';
import MobileMenu from '../MobileMenu'


export default class Header extends React.PureComponent {

    render() {
        let menu = (typeof(window) !== "undefined" && window.innerWidth <= 667) ? <MobileMenu /> : <Menu />

        return (
            <Row className={'header'}>
                <Col >
                    <Link to={"/"}><img id='logo' className={'logo'} src='https://s3.amazonaws.com/hwma-images/logo.png' /></Link>
                    {menu}
                </Col>
            </Row>
        )
    }
}