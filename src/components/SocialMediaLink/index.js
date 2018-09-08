import React from 'react';

export default class SocialMediaLink extends React.PureComponent {
    render() {
        return(
            <a href={this.props.URL} target={'_blank'}>
                <i className={this.props.className} ></i>
            </a>
        )
    }
}
