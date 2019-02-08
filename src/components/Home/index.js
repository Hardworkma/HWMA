import React from 'react';


export default class Home extends React.PureComponent {
    render() {
        return(
            <div id='blackbelt' className={'container'}>
                <img id={'blackbelt-img'}  src='https://s3.amazonaws.com/hwma-images/black_belt.jpg' alt={"black belt"}/>
                <div id={'earn-it-header'} className={'container-center blackbelt-header'}>EARN IT.</div>
            </div>
        )
    }
}