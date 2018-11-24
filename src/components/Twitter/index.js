import React from 'react';
import { Timeline } from 'react-twitter-widgets'

export default class Twitter extends React.PureComponent {
    render() {
        let width = '500';
        if(window.innerWidth > 375 && window.innerWidth < 667 ) {
            width = '850'
        }
        return(
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'HardWorkMarArts'
                }}
                options={{
                    username: 'HardWorkMarArts',
                    height: '550',
                    width: {width},
                    'chrome': 'noheader nofooter'
                }}

            />
        )
    }
}