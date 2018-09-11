import React from 'react';
import {Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom'

import Logo from '../../images/hwma_horz_logo_2c.png';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu'


export default class Header extends React.PureComponent {

    render() {
        let menu = (window.innerWidth >= 375 && window.innerWidth <= 667) ? <MobileMenu /> : <Menu />
        return (
            <Row className={'header'}>
                <Col >
                    <Link to={"/"}><img id='logo' className={'logo'} src={Logo} /></Link>
                    {menu}
                </Col>
            </Row>
        )
    }
}