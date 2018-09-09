import React from 'react'
import MenuItem from "../MenuItem";

export default class ProgramLinks extends React.PureComponent {
    render() {
        return(
            <div>
                <MenuItem path={'/taekwondo'} title={'Taekwondo (6+ y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/hardworkheros'} title={'Hard Work Heros (4-6 y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/sidekicks'} title={'Sidekicks (3-4 y/o)'} onClick={this.props.menuClick}/>
                <MenuItem path={'/afterschool'} title={'Afterschool Program'} onClick={this.props.menuClick}/>
                <MenuItem path={'/camp'} title={'Camp Program'} onClick={this.props.menuClick}/>
            </div>
        )
    }
}