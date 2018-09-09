import React from 'react';
import {Container, Col, Row} from 'reactstrap'
import CollapsingCard from "../CollapsingCard";
import MenuItem from "../MenuItem";
import InfoLinks from "../InfoLinks";
import ProgramLinks from "../ProgramLinks";

export default class MobileMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({toggleMenu: !this.state.toggleMenu})
    }

    render() {
        let menuClass = 'mobile-menu'
        let iconClass = 'fa-2x'
        let menuText = ''
        let menuStyle = {};
        let infoMenu = {}
        if(this.state.toggleMenu) {
            menuClass += ' is-active';
            iconClass += ' fas fa-times'
            menuText = 'Close'
            menuStyle = {marginLeft: '0px'}
        } else {
            iconClass += ' fas fa-bars hamburger'
            menuText = 'Menu'
            menuStyle = {width: '0px'}
        }

        return (
            <Container id={'mobile-header'} className={'mobile-header pull-left'}>
                <Row>
                <div  onClick={this.toggleMenu}>
                    <i className={iconClass}  >{menuText}</i>
                </div>
                </Row>
                <Row className={menuClass} style={menuStyle}>
                    <CollapsingCard cardClass={'mobile-menu-card'} title={'Information'} titleClass={''} body={<InfoLinks menuClick={this.toggleMenu}/>}/>
                    <CollapsingCard cardClass={'mobile-menu-card'} title={'Programs'} titleClass={''} body={<ProgramLinks menuClick={this.toggleMenu}/>}/>
                    <CollapsingCard cardClass={'mobile-menu-card'} title={'Contact Us'} titleClass={''} body={''}/>
                </Row>
            </Container>
        )
    }
}