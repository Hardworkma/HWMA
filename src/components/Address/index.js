import React from 'react'

export default class Address extends React.PureComponent {

    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.addClass}>46950 Community Plaza</div>
                <div className={this.props.add1Class}>Sterling, Virginia 20164 </div>
                <div className={this.props.phoneClass}>(571) 455-9071</div>
                <div className={this.props.emailClass}>info@hardworkma.com</div>
            </div>
        );
    }
}