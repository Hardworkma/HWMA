import React from 'react'

export default class Address extends React.PureComponent {

    render() {
        return (
            <div >
                <div className={'footer-address'}>46950 Community Plaza</div>
                <div className={'footer-address-1'}>Sterling, Virginia 20164 </div>
                <div className={'footer-phone'}>(571) 455-9071</div>
                <div className={'footer-email'}>hardworkma@gmail.com</div>
            </div>
        );
    }
}