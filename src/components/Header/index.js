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
            <Row className={'header'}>
                {/*<Col >*/}
                    {/*<Link to={"/"}><img className={'logo'} src={Logo} /></Link>*/}
                {/*</Col>*/}
            </Row>
        )
    }
}