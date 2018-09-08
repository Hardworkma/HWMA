import React from 'react';
import { Timeline } from 'react-twitter-widgets'

export default class Twitter extends React.PureComponent {
    render() {
        return(
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'HardWorkMarArts'
                }}
                options={{
                    username: 'HardWorkMarArts',
                    height: '400',
                    width: '500',
                    'chrome': 'noheader nofooter'
                }}

            />
        )
    }
}