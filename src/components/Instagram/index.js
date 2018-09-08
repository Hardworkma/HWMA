import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import Lightbox from 'react-images';
import Image from './image'
// import 'slick-carousel/slick/slick-theme.scss'
// import slick from 'slick-carousel/slick/slick'
// import "../../styles/_slick.css";
// import "../../styles/_slick-theme.css";
// import './slick-theme.min.css'
import '../../styles/app.scss'
import Carousel from 'react-image-carousel';

import ThumbnailGallery from '../ThumbnailGallery/index'



export default class Instagram extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            lightboxIsOpen: false,
            currentImage: 0,
        };
        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    componentWillMount() {
        this.fetchPhotos();
    }

    componentDidMount() {
        // $('.slick-class').slick({
        //     infinite: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        // });
    }

    openLightbox (index, event) {
        console.log('open lightbox')
        if (event) {
            event.preventDefault();
        }
        if (this.props.lightboxWillOpen) {
            this.props.lightboxWillOpen.call(this, index);
        }

        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }

    closeLightbox () {
        console.log('close lightbox')
        if (this.props.lightboxWillClose) {
            this.props.lightboxWillClose.call(this);
        }

        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious () {
        console.log('goto previous')
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    gotoNext () {
        console.log('goto next')
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    onClickImage () {
        console.log('on click image')
        // if (this.state.currentImage === this.props.images.length - 1)
        //     return;
        this.gotoNext();
    }

    // onSelectImage (index, event) {
    //     event.preventDefault();
    //     if(this.props.onSelectImage)
    //         this.props.onSelectImage.call(this, index, this.state.images[index]);
    // }

    gotoImage (index) {
        this.setState({
            currentImage: index
        });
    }

    getOnClickThumbnailFn () {
        console.log('get on click thumbnail fn')
        if(!this.props.onClickThumbnail && this.props.enableLightbox)
            return this.openLightbox;
        if(this.props.onClickThumbnail)
            return this.props.onClickThumbnail;
        return null;
    }

    getOnClickLightboxThumbnailFn () {
        console.log('get on click lightbox thumbnail fn')
        if(!this.props.onClickLightboxThumbnail
            && this.props.showLightboxThumbnails)
            return this.gotoImage;
        if(this.props.onClickLightboxThumbnail
            && this.props.showLightboxThumbnails)
            return this.props.onClickLightboxThumbnail;
        return null;
    }

    getOnClickImageFn () {
        console.log('get on click imgage fn')
        // if(this.props.onClickImage)
        //     return this.props.onClickImage;
        return this.onClickImage;
    }

    getOnClickPrevFn () {
        if(this.props.onClickPrev)
            return this.props.onClickPrev;
        return this.gotoPrevious;
    }

    getOnClickNextFn () {
        if(this.props.onClickNext)
            return this.props.onClickNext;
        return this.gotoNext;
    }

    fetchPhotos() {
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=250227364.1e695f1.0ebe04392ebb4229ae692fa7cdfd5fe4')
            .then(response => {
                return response.json()
            }).then(data => {
                this.setState({
                    photos: data.data
                })
        })
    }

    render() {
        let photos = this.state.photos.map(function(photo){
            return {
                src: photo.images.standard_resolution.url,
                thumbnail: photo.images.standard_resolution.url,
                thumbnailWidth: 160,
                thumbnailHeight: 174,
                margin: 10,
            }
        })

        let tmp = this.state.photos.map(function(img){
            return {src: img.images.standard_resolution.url}

        })

        const settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        var images = photos.map((item, idx) => {
            return <Image
                key={"Image-"+idx+"-"+item.src}
                item={item}
                index={idx}
                margin={item.margin}
                height={item.thumbnailHeight}
                // isSelectable={this.props.enableImageSelection}
                onClickImage={() => this.setState({lightboxIsOpen: !this.state.lightboxIsOpen, currentImage:idx})}
                // onSelectImage={this.onSelectImage}
                // tagStyle={this.props.tagStyle}
                // tileViewportStyle={this.props.tileViewportStyle}
                // thumbnailStyle={this.props.thumbnailStyle}
            />;});
        var resizeIframeStyles = {
            height: 0,
            margin: 0,
            padding: 0,
            overflow: "hidden",
            borderWidth: 0,
            position: "fixed",
            backgroundColor: "transparent",
            width: "100%"
        };

        return (

            <div>
                <Slider {...settings}>
                    {images}
                </Slider>

                <Lightbox
                    images={tmp}
                    // backdropClosesModal={this.props.backdropClosesModal}
                    currentImage={this.state.currentImage}
                    // preloadNextImage={this.props.preloadNextImage}
                    // customControls={this.props.customControls}
                    // enableKeyboardInput={this.props.enableKeyboardInput}
                    // imageCountSeparator={this.props.imageCountSeparator}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.getOnClickImageFn()}
                    onClickNext={this.getOnClickNextFn()}
                    onClickPrev={this.getOnClickPrevFn()}
                    // showCloseButton={this.props.showCloseButton}
                    // showImageCount={this.props.showImageCount}
                    onClose={this.closeLightbox}
                    // width={this.props.lightboxWidth}
                    // theme={this.props.theme}
                    onClickThumbnail={this.getOnClickLightboxThumbnailFn()}
                    // showThumbnails={this.props.showLightboxThumbnails}
                />
            </div>

        )
    }
}

//<ThumbnailGallery images={photos} maxRows={1} margin={10} enableThumbnailScroll={true} scrollWidth={30}/>{/*{/**/}*/}