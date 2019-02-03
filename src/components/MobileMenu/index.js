import React from 'react';
import {Container, Col, Row} from 'reactstrap'
import CollapsingCard from "../CollapsingCard";
import MenuItem from "../MenuItem";
import Membership from '../Membership'
import InfoLinks from "../InfoLinks";
import ProgramLinks from "../ProgramLinks";
import Map from "../Map";
import Address from "../Address";

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
        let iconClass = 'mobile-menu-icon fa-2x'
        let menuText = ''
        if(this.state.toggleMenu) {
            menuClass += ' is-active';
            iconClass += ' fas fa-times'
            menuText = '  Close'

        } else {
            iconClass += ' fas fa-bars hamburger'
            menuText =  '  Menu'
        }
        // let contact = <div>
        //                 <Address addClass={'sub-menu-address'}
        //                          add1Class={'sub-menu-address1'}
        //                          phoneClass={'sub-menu-phone'}
        //                          emailClass={'sub-menu-email'}/>
        //                 <Map loadingElementHeight={'100%'} mapElementHeight={'100%'} containerElementHeight={'300px'}/>
        //             </div>
        return (
            <div>
                <Row>
                    <div  onClick={this.toggleMenu}>
                        <i className={iconClass} ><span className={'mobile-menu-text'}>{menuText}</span></i>
                    </div>
                </Row>
                <div className={menuClass}>
                    <CollapsingCard cardClass={'mobile-menu-card'} title={'Information'} titleClass={'mobile-menu-title'} body={<InfoLinks menuClick={this.toggleMenu}/>}/>
                    <CollapsingCard cardClass={'mobile-menu-card'} title={'Programs'} titleClass={'mobile-menu-title'} body={<ProgramLinks menuClick={this.toggleMenu}/>}/>
                </div>
            </div>
        )
    }
}

