import React from 'react';
import {Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap';

import Logo from '../../images/hwma_horz_logo_2c.png';
import Icon from '../../images/icon-orange.png'
import Kick from '../../images/kick-orange.png'
import MasterCharles from '../../images/master_charles.jpg';
import BeltIcon from '../../images/belt-icon.png'
import GreenIcon from '../../images/green-icon.png'
import Map from '../../components/Map/index'
import MenuItem from "../MenuItem";



export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showAbout: false,
            showResources: false,
            logo: false
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
            <Row className={'header_1'}>

                <Col >
                    <Link to={"/"}><img className={'logo_1'} src={Logo} /></Link>

                    <div className={'links text-right to-right'}>
                    <ul className={'links-menu horizontal list-inline'}>
                        <li className={'header-link list-inline-item'}>
                            <a href={'#'} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout} className={'no-underline'}>
                                Information <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <div className={'sub-menu'} style={styleAbout} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout}>

                                    <Row>
                                        <Col xs={'6'}>
                                            <div className={'sub-menu-address'}>
                                                46950 Community Plaza
                                                Sterling, Virginia 20164<br/>
                                            </div>
                                            <div className={'sub-menu-phone'}>
                                                (571) 455-9071
                                            </div>
                                            <div className={'sub-menu-email'}>
                                                hardworkma@gmail.com
                                            </div>
                                            <Map/>
                                        </Col>
                                        <Col xs={'3'} >
                                            <div className={'sub-menu-container'}>
                                                <img src={Icon} alt={'HWMA logo'} style={{paddingLeft:'90px', paddingBottom:'20px'}}/> <br/>
                                                <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Information</span></div>
                                                <MenuItem path={'/welcome'} title={'Welcome'} onClick={this.menuClick}/>
                                                <MenuItem path={'/about'} title={'About HWMA'} onClick={this.menuClick}/>
                                                <MenuItem path={'/faq'} title={'FAQ'} onClick={this.menuClick}/>
                                                <MenuItem path={'/reviews'} title={'Reviews'} onClick={this.menuClick}/>
                                                <MenuItem path={'#'} title={'Schedule'} />
                                            </div>
                                        </Col>
                                        <Col xs={'3'}>
                                            <div className={'sub-menu-container'}>
                                                <img src={Kick} alt={'HWMA logo'} style={{paddingLeft:'90px', paddingBottom:'20px'}}/> <br/>
                                                <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Programs</span></div>
                                                <MenuItem path={'/taekwondo'} title={'Taekwondo (6+ y/o)'} onClick={this.menuClick}/>
                                                <MenuItem path={'/hardworkheros'} title={'Hard Work Heros (4-6 y/o)'} onClick={this.menuClick}/>
                                                <MenuItem path={'/sidekicks'} title={'Sidekicks (3-4 y/o)'} onClick={this.menuClick}/>
                                                <MenuItem path={'/afterschool'} title={'Afterschool Program'} onClick={this.menuClick}/>
                                                <MenuItem path={'/camp'} title={'Camp Program'} onClick={this.menuClick}/>
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
                                        <img src={MasterCharles} style={{marginLeft:'30%'}}/>
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
                </Col>
            </Row>
        )
    }
}