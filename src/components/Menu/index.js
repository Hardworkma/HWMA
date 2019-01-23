import React from 'react';
import {Col, Row} from 'reactstrap'

import Map from '../../components/Map/index'
import InfoLinks from "../InfoLinks";
import ProgramLinks from "../ProgramLinks";
import Address from "../Address";
import Enroll from "../Enroll";


export default class Menu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showAbout: false,
            showTrial: false,
            showPrograms: false,
            enroll: false,
        }

        this.showAbout = this.showAbout.bind(this);
        this.hideAbout = this.hideAbout.bind(this);
        this.showPrograms = this.showPrograms.bind(this);
        this.hidePrograms = this.hidePrograms.bind(this);
        this.showTrial = this.showTrial.bind(this);
        this.hideTrial = this.hideTrial.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.enrollClick = this.enrollClick.bind(this);

    }

    showAbout() {
        this.setState({showAbout:true});
    }

    hideAbout() {
        this.setState({showAbout:false});
    }
    showPrograms() {
        this.setState({showPrograms:true});
    }

    hidePrograms() {
        this.setState({showPrograms:false});
    }

    showTrial() {
        this.setState({showTrial:true});
    }

    hideTrial() {
        this.setState({showTrial:false});
    }
    menuClick() {
        this.hideAbout();
        this.hidePrograms();
        this.hideTrial()
    }

    enrollClick() {
        this.setState({enroll:true});
    }

    render() {
        let styleAbout = (this.state.showAbout)?{opacity:1, marginLeft:'auto', marginRight:'auto'}:{visibility:'hidden', opacity:0,  marginLeft:'auto', marginRight:'auto'}
        let stylePrograms = (this.state.showPrograms)?{opacity:1, marginLeft:'auto', marginRight:'auto'}:{visibility:'hidden', opacity:0,  marginLeft:'auto', marginRight:'auto'}
        let styleTrial = (this.state.showTrial)?{opacity:1, marginLeft:'auto', marginRight:'auto'}:{visibility:'hidden', opacity:0,  marginLeft:'auto', marginRight:'auto'}
        return (
            <div className={'links text-right to-right'}>
                <ul className={'links-menu horizontal list-inline'}>
                    <li className={'header-link list-inline-item menu-link'}>
                        <a href={'#'} onMouseEnter={this.showTrial} onMouseLeave={this.hideTrial} className={'no-underline'}>
                            Trial <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div className={'sub-menu'} style={styleTrial} onMouseEnter={this.showTrial} onMouseLeave={this.hideTrial}>
                            <Row>
                                <iframe src={'https://www.mystudio.academy/t/?=hwma/1988'}></iframe>
                            </Row>
                        </div>
                    </li>
                    <li className={'header-link list-inline-item'}>
                        <a href={'#'} onClick={this.enrollClick} className={'no-underline'}>
                            Enroll
                        </a>
                        <Enroll showEnroll={this.state.enroll}/>
                    </li>
                    <li className={'header-link list-inline-item menu-link'}>
                        <a href={'#'} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout} className={'no-underline'}>
                            Information <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div className={'sub-menu'} style={styleAbout} onMouseEnter={this.showAbout} onMouseLeave={this.hideAbout}>
                            <Row>
                                <Col xs={'9'}>
                                    <Address addClass={'sub-menu-address'}
                                             add1Class={'sub-menu-address1'}
                                             phoneClass={'sub-menu-phone'}
                                             emailClass={'sub-menu-email'}/>
                                    <Map loadingElementHeight={'100%'} mapElementHeight={'100%'} containerElementHeight={'300px'}/>
                                </Col>
                                <Col xs={'3'} >
                                    <div className={'sub-menu-container'}>
                                        <img src='https://s3.amazonaws.com/hwma-images/icon-orange.png' alt={'HWMA logo'} style={{paddingLeft:'90px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Information</span></div>
                                        <InfoLinks menuClick={this.menuClick}/>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </li>
                    <li className={'header-link list-inline-item menu-link'}>
                        <a href={'#'} onMouseEnter={this.showPrograms} onMouseLeave={this.hidePrograms} className={'no-underline'}>
                            Programs <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div className={'sub-menu'} style={stylePrograms} onMouseEnter={this.showPrograms} onMouseLeave={this.hidePrograms}>
                            <Row>
                                <Col xs={'9'}>
                                    <img src='https://s3.amazonaws.com/hwma-images/kick.png' style={{marginLeft:'30%', marginTop:'10%'}}/>
                                </Col>
                                <Col xs={'3'}>
                                    <div className={'sub-menu-container'}>
                                        <img src='https://s3.amazonaws.com/hwma-images/belt-icon.png' alt={'HWMA logo'} style={{paddingLeft:'45px', paddingBottom:'20px'}}/> <br/>
                                        <div className={'sub-menu-title'}><span style={{marginLeft:'62px'}}>Programs</span></div>
                                        <ProgramLinks menuClick={this.menuClick}/>
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