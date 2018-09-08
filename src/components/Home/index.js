import React from 'react';
import Blackbelt from '../../images/black_belt.jpg'


export default class Home extends React.PureComponent {
    render() {
        return(
            <div id='blackbelt' className={'container'}>
                <img id='blackbelt-img' src={Blackbelt} alt={"black belt"}/>
                <div className={'container-center'}>EARN IT.</div>
            </div>
        )
    }
}