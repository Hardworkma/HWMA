import React from 'react'
import { Link } from 'react-router-dom'

export default class MenuItem extends React.PureComponent {
    render() {
        return(
            <div className={'menu-button'}>
                <Link className={"menu-link no-underline"} onClick={this.props.onClick} to={this.props.path}>{this.props.title}</Link>
            </div>
        );
    }
}