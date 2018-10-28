import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import Lightbox from 'react-images';
import Image from './image'
import '../../styles/app.scss'




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


    openLightbox (index, event) {
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
        if (this.props.lightboxWillClose) {
            this.props.lightboxWillClose.call(this);
        }

        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    onClickImage () {
        this.gotoNext();
    }


    gotoImage (index) {
        this.setState({
            currentImage: index
        });
    }

    getOnClickThumbnailFn () {
        if(!this.props.onClickThumbnail && this.props.enableLightbox)
            return this.openLightbox;
        if(this.props.onClickThumbnail)
            return this.props.onClickThumbnail;
        return null;
    }

    getOnClickLightboxThumbnailFn () {
        if(!this.props.onClickLightboxThumbnail
            && this.props.showLightboxThumbnails)
            return this.gotoImage;
        if(this.props.onClickLightboxThumbnail
            && this.props.showLightboxThumbnails)
            return this.props.onClickLightboxThumbnail;
        return null;
    }

    getOnClickImageFn () {
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
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=7294883355.f2b7c16.40594bd4835e445cbc5c9330cb3038c8')
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
            slidesToShow: 4,
            slidesToScroll: 4
        };

        var images = photos.map((item, idx) => {
            return <Image
                key={"Image-"+idx+"-"+item.src}
                item={item}
                index={idx}
                margin={item.margin}
                height={item.thumbnailHeight}
                onClickImage={() => this.setState({lightboxIsOpen: !this.state.lightboxIsOpen, currentImage:idx})}
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
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.getOnClickImageFn()}
                    onClickNext={this.getOnClickNextFn()}
                    onClickPrev={this.getOnClickPrevFn()}
                    onClose={this.closeLightbox}
                    onClickThumbnail={this.getOnClickLightboxThumbnailFn()}
                />
            </div>

        )
    }
}