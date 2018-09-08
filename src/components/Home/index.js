import React from 'react';
import Blackbelt from '../../images/black_belt.jpg'


export default class Home extends React.PureComponent {
    render() {
        return(
            <div id='blackbelt' className={'container'}>
                <img src={Blackbelt} alt={"black belt"} style={{maxHeight:'300px', marginRight:'25%'}}/>
                <div className={'container-center'}>EARN IT.</div>
            </div>
        )
    }
}