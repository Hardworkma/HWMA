import React from 'react'

export default class Address extends React.PureComponent {

    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.addClass}>46950 Community Plaza</div>
                <div className={this.props.add1Class}>Sterling, Virginia 20164 </div>
                <div className={this.props.phoneClass}><a href="tel:+15714559071">(571) 455-9071</a></div>
                <div className={this.props.emailClass}><a href='mailto: info@hardworkma.com'>info@hardworkma.com</a></div>
            </div>
        );
    }
}