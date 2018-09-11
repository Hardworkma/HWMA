import React from 'react';
import {Col, Row} from 'reactstrap'

import Icon from '../../images/icon-orange.png'
import Kick from '../../images/kick-orange.png'
import KidKick from '../../images/kick.png';
import BeltIcon from '../../images/belt-icon.png'
import GreenIcon from '../../images/green-icon.png'
import Map from '../../components/Map/index'
import MenuItem from "../MenuItem";
import InfoLinks from "../InfoLinks";
import ProgramLinks from "../ProgramLinks";
import Address from "../Address";


export default class Menu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showAbout: false,
            showResources: false,
        }

        this.showAbout = this.showAbout.bind(this);
        this.hideAbout = this.hideAbout.bind(this);
        this.showResources = this.showResources.bind(this);
        this.hideResources = this.hideResources.bind(this);
        this.menuClick = this.menuClick.bind(this);

    }

    showAbout() {
        this.setState({showAbout:true});
    }

    hideAbout() {
        this.setState({showAbout:false});
    }
    showResources() {
        this.setState({showResources:true});
    }

    hideResources() {
        this.setState({showResources:false});
    }
    menuClick() {
        this.hideAbout();
        this.hideResources();
    }

    render() {
        let styleAbout = (this.state.showAbout)?{opacity:1, marginLeft:'auto', marginRight:'auto'}:{visibility:'hidden', opacity:0,  marginLeft:'auto', marginRight:'auto'}
        let styleResources = (this.state.showResources)?{opacity:1, marginLeft:'auto', marginRight:'auto'}:{visibility:'hidden', opacity:0,  marginLeft:'auto', marginRight:'auto'}
        return (
            <div className={'links text-right to-right'}>
                <ul className={'links-menu horizontal list-inline'}>
                    <li className={'header-link list-inline-item'}>
                        <a href={'#'} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout} className={'no-underline'}>
                            Information <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div className={'sub-menu'} style={styleAbout} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout}>

                            <Row>
                                <Col xs={'6'}>
                                    <Address addClass={'sub-menu-address'}
                                             add1Class={'sub-menu-address1'}
                                             phoneClass={'sub-menu-phone'}
                                             emailClass={'sub-menu-email'}/>
                                    <Map loadingElementHeight={'100%'} mapElementHeight={'100%'} containerElementHeight={'300px'}/>
                                </Col>
                                <Col xs={'3'} >
                                    <div className={'sub-menu-container'}>
                                        <img src={Icon} alt={'HWMA logo'} style={{paddingLeft:'90px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Information</span></div>
                                        <InfoLinks menuClick={this.menuClick}/>
                                    </div>
                                </Col>
                                <Col xs={'3'}>
                                    <div className={'sub-menu-container'}>
                                        <img src={Kick} alt={'HWMA logo'} style={{paddingLeft:'90px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Programs</span></div>
                                        <ProgramLinks menuClick={this.menuClick}/>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </li>
                    <li className={'header-link list-inline-item'}>
                        <a href={'#'} onMouseEnter={this.showResources} onMouseLeave={this.hideResources} className={'no-underline'}>
                            Resources <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div className={'sub-menu'} style={styleResources} onMouseEnter={this.showResources} onMouseLeave={this.hideResources}>

                            <Row>
                                <Col xs={'6'}>
                                    <img src={KidKick} style={{marginLeft:'30%', marginTop:'10%'}}/>
                                </Col>
                                <Col xs={'3'}>
                                    <div className={'sub-menu-container'}>
                                        <img src={GreenIcon} alt={'Green Belt'} style={{paddingLeft:'45px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Color Belts</span></div>
                                        <MenuItem path={'#'} title={'Curriculum'} />
                                        <MenuItem path={'#'} title={'Terminology'} />
                                        <MenuItem path={'#'} title={'Form Videos'} />
                                    </div>
                                </Col>
                                <Col xs={'3'}>
                                    <div className={'sub-menu-container'}>
                                        <img src={BeltIcon} alt={'Black Belt'} style={{paddingLeft:'45px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Black Belts</span></div>
                                        <MenuItem path={'#'} title={'Curriculum'} />
                                        <MenuItem path={'#'} title={'Terminology'} />
                                        <MenuItem path={'#'} title={'Form Videos'} />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}