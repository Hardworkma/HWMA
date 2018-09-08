import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Image extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    tagStyle () {
        if (this.props.tagStyle)
            return this.props.tagStyle;
        return {
            display: "inline",
            padding: ".2em .6em .3em",
            fontSize: "75%",
            fontWeight: "600",
            lineHeight: "1",
            color: "yellow",
            background: "rgba(0,0,0,0.65)",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "baseline",
            borderRadius: ".25em"
        };
    }

    tileViewportStyle () {
        if (this.props.tileViewportStyle)
            return this.props.tileViewportStyle.call(this);
        if (this.props.item.isSelected)
            return {
                width: this.props.item.vwidth -32,
                height: this.props.height -32,
                margin: 16,
                overflow: "hidden"
            };
        return {
            width: this.props.item.vwidth,
            height: this.props.height,
            overflow: "hidden"
        };
    }

    thumbnailStyle () {
        if (this.props.thumbnailStyle)
            return this.props.thumbnailStyle.call(this);

        var rotationTransformValue = undefined;
        switch (this.props.item.orientation) {
            case 3:
                rotationTransformValue = "rotate(180deg)";
                break;
            case 6:
                rotationTransformValue = "rotate(90deg)";
                break;
            case 8:
                rotationTransformValue = "rotate(270deg)";
                break;
            case 2:
                rotationTransformValue = "rotateY(180deg)";
                break;
            case 4:
                rotationTransformValue = "rotate(180deg) rotateY(180deg)";
                break;
            case 5:
                rotationTransformValue = "rotate(270deg) rotateY(180deg)";
                break;
            case 7:
                rotationTransformValue = "rotate(90deg) rotateY(180deg)";
                break;
        }
        return {
            cursor: 'pointer',
            width: this.props.item.scaletwidth,
            height: this.props.height,
            marginLeft: this.props.item.marginLeft,
            marginTop: 0,
            transform: rotationTransformValue
        };
    }

    render () {
        // var alt = this.props.item.alt ? this.props.item.alt : "";
        // var tags = (typeof this.props.item.tags === 'undefined') ? <noscript/> :
        //     this.props.item.tags.map((tag) => {
        //         return <div title={tag.title}
        //                     key={"tag-"+tag.value}
        //                     style={{display: "inline-block",
        //                         cursor: 'pointer',
        //                         pointerEvents: 'visible',
        //                         margin: "2px"}}>
        //             <span style={this.tagStyle()}>{tag.value}</span>
        //         </div>;
        //     });
        //
        // var customOverlay = (typeof this.props.item.customOverlay === 'undefined')
        //     ? <noscript/> :
        //     <div className="custom-overlay"
        //          key={"custom-overlay-"+this.props.index}
        //          style={{
        //              pointerEvents: "none",
        //              opacity: this.state.hover ? 1 : 0,
        //              position: "absolute",
        //              height: "100%",
        //              width: "100%"}}>
        //         {this.props.item.customOverlay}
        //     </div>;

        return (
            <div className="tile"
                 key={"tile-"+this.props.index}
                 onMouseEnter={(e) => this.setState({hover: true})}
                 onMouseLeave={(e) => this.setState({hover: false})}
                 style={{
                     margin: this.props.margin,
                     WebkitUserSelect: "none",
                     position: "relative",
                     float: "left",
                     background: "#eee",
                     padding: "0px"}}>

                <div className="tile-icon-bar"
                     key={"tile-icon-bar-"+this.props.index}
                     style={{
                         pointerEvents: "none",
                         opacity: 1,
                         position: "absolute",
                         height: "36px",
                         width: "100%"}}>

                </div>

                <div className="tile-bottom-bar"
                     key={"tile-bottom-bar-"+this.props.index}
                     style={{
                         padding: "2px",
                         pointerEvents: "none",
                         position: "absolute",
                         minHeight: "0px",
                         maxHeight: "160px",
                         width: "100%",
                         bottom: "0px",
                         overflow: "hidden"
                     }}>

                </div>


                <div className="tile-overlay"
                     key={"tile-overlay-"+this.props.index}
                     style={{
                         pointerEvents: "none",
                         opacity: 1,
                         position: "absolute",
                         height: "100%",
                         width: "100%",
                         background: (this.state.hover
                             && !this.props.item.isSelected) ?
                             'linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)' : 'none'}}>
                </div>

                <div className="tile-viewport"
                     style={this.tileViewportStyle()}
                     key={"tile-viewport-"+this.props.index}
                     onClick={this.props.onClick ?
                         (e) => this.props.onClick.call(this, this.props.index, e) : null}>
                    <img
                        key={"img-"+this.props.index}
                        src={this.props.item.thumbnail}
                        alt={alt}
                        title={this.props.item.caption}
                        style={this.thumbnailStyle()} />
                </div>

            </div>
        );
    }
}

Image.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    margin: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
    onSelectImage: PropTypes.func,
    tileViewportStyle: PropTypes.func,
    thumbnailStyle: PropTypes.func,
    tagStyle: PropTypes.object,
    customOverlay: PropTypes.element
};

Image.defaultProps = {
    hover: false
};

export default Image;