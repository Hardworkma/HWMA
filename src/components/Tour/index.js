import React from "react";
import {Container, Col, Row} from 'reactstrap'
import PANO_1 from '../../images/PANO_1.jpg'
import PANO_2 from '../../images/PANO_2.jpg'
import pano_1_thumb from "../../images/PANO_1_Thumb.jpg";
import pano_2_thumb from "../../images/PANO_2_Thumb.jpg";


export default class Tour extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            photos: [PANO_1, PANO_2],
            selected: 0,
        }

        this.loadPano = this.loadPano.bind(this)
    }

    loadPano(event, selectedPano) {
        event.preventDefault();

        this.setState({selected: selectedPano})

    }

    render() {

        let thumbStyle = {width: '50%'}
        let panStyle = {marginLeft: '5%'}


        let view = {"type": "equirectangular",
            "panorama": "https://pannellum.org/images/cerro-toco-0.jpg",
            "autoLoad": true}

        console.log('state: ' + JSON.stringify(this.state.photos[this.state.selected]))
        return (
            <div style={panStyle}>

            <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <Col>
                        <img src={pano_1_thumb} onClick={(e) => this.loadPano(e, 0)} style={thumbStyle}/>
                    </Col>
                    <Col>
                        <img src={pano_2_thumb} onClick={(e) => this.loadPano(e, 1)} style={thumbStyle}/>
                    </Col>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <span>Select the image above to load the pano view.</span>
                </Row>
            </div>

        )
    }
}

{/*
<Pannellum
    width='95%'
    height='400px'
    imagePath={PANO_1}
    isDisplayCloseButton={false}
    showZoomCtrl={true}
    showFullscreenCtrl={false}
    autoLoad />
    */}
