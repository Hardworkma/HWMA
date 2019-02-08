import React from 'react';


export default class ThankYou extends React.PureComponent {
    render() {
        return (
            <div id='blackbelt' className={'container'}>
                <img id={'blackbelt-img'} src='https://s3.amazonaws.com/hwma-images/black_belt.jpg' alt={"black belt"}/>
                <div className={'container-center '}>
                    <span id={'thank-you-header'} className={'blackbelt-header'}>Thank you for enrolling!</span>
                    <br/>
                    <span className={'blackbelt-content'}>
                        To see your curriculum, class schedules, as well as keep in touch with us about special events,
                        please download the MyStudio App. Once you're all set, use our school code HWMA to set up your account!
                        <br/>
                        <br/>
                        <a target="_blank" href={"https://itunes.apple.com/us/app/mystudio-app/id1258207230?mt=8"}>
                                <i className="fab fa-app-store-ios store-icon fa-4x"></i>
                        </a>
                        <a target="_blank" href={"https://play.google.com/store/apps/details?id=com.mystudio.app&hl=en"}>
                            <i className="fab fa-android store-icon fa-4x"></i>
                        </a>
                    </span>
                </div>
            </div>


        );
    }
}