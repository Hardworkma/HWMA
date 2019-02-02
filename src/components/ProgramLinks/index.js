import React from 'react'
import MenuItem from "../MenuItem";

export default class ProgramLinks extends React.PureComponent {
    render() {
        return(
            <div>
                <MenuItem path={'/taekwondo/16'} title={'Adult Taekwondo (16+ y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/taekwondo/7'} title={'Taekwondo (7+ y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/hardworkheroes'} title={'Hard Work Heroes (4-6 y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/sidekicks'} title={'Sidekicks (3-4 y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/afterschool'} title={'Afterschool Program'} onClick={this.props.menuClick}/>
                <MenuItem path={'/camp'} title={'Camp Program'} onClick={this.props.menuClick}/>
            </div>
        )
    }
}