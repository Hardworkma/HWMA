import React from 'react';
import { compose, withProps } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


const LATITUDE = 39.016145;
const LONGITUDE = -77.377147;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: LATITUDE, lng: LONGITUDE }}
    >
        <Marker position={{ lat: LATITUDE, lng: LONGITUDE }}/>
    </GoogleMap>
))


export default class Map extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isMarkerShown: false,
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker(){
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick(){
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFFB1-_iLLfGC5OONbBQknbyixNhCAsrQ"
                loadingElement={<div style={{ height: this.props.loadingElementHeight }} />}
                containerElement={<div style={{ height: this.props.containerElementHeight }} />}
                mapElement={<div style={{ height: this.props.mapElementHeight }} />}
            />

        )
    }
}


