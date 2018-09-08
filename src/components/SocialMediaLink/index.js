import React from 'react';

export default class SocialMediaLink extends React.PureComponent {
    render() {
        let className = 'fab social-link fa-2x '
        console.log(this.props.type + ' type')
        if(this.props.type == 'facebook') {
            className += 'fa-facebook-f'
        } else if(this.props.type == 'twitter') {
            className += 'fa-twitter'
        } else {
            className += 'fa-instagram'
        }
        console.log(className)
        return(
            <a href={this.props.URL} target={'_blank'}>
                <i className={className} style={this.props.style}></i>
            </a>
        )
    }
}
