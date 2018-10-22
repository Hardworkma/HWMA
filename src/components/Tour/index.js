import React from "react";
import {Container, Col, Row} from 'reactstrap'
import PANO_1 from '../../images/PANO_1.jpg'
import PANO_2 from '../../images/PANO_2.jpg'
import Image from "../Instagram/image";
import Slider from "react-slick";
import {Pannellum} from "360-react-pannellum";


export default class Tour extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            photos: [PANO_1, PANO_2]
        }
    }
    render() {
        // let photos = this.state.photos.map(function(photo){
        //     return {
        //         src: photo,
        //         thumbnail: photo,
        //         thumbnailWidth: 160,
        //         thumbnailHeight: 174,
        //         margin: 10,
        //     }
        // });
        //
        // var images = photos.map((item, idx) => {
        //     return <Image
        //         key={"Image-"+idx+"-"+item.src}
        //         item={item}
        //         index={idx}
        //         margin={item.margin}
        //         height={item.thumbnailHeight}
        //         // onClickImage={() => this.setState({lightboxIsOpen: !this.state.lightboxIsOpen, currentImage:idx})}
        //     />;});
        return (
            <div  >
            <Pannellum
                width='100%'
                height='300px'
                imagePath={PANO_1}
                isDisplayCloseButton={false}
                showZoomCtrl={true}
                showFullscreenCtrl={false}
                autoLoad />
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
