import React from 'react';
import MenuItem from "../MenuItem";

export default class InfoLinks extends React.PureComponent {
    render() {
        return (
            <div>
                <MenuItem path={'/welcome'} title={'Welcome'} onClick={this.props.menuClick}/>
                <MenuItem path={'/about'} title={'About HWMA'} onClick={this.props.menuClick}/>
                <MenuItem path={'/faq'} title={'FAQ'} onClick={this.props.menuClick}/>
                <MenuItem path={'/reviews'} title={'Reviews'} onClick={this.props.menuClick}/>
                <MenuItem path={'#'} title={'Schedule'} />
            </div>
        )
    }
}