import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Col, Modal, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';


export default class Enroll extends React.PureComponent {
    constructor(props) {
        super(props);

        this.redirect = this.redirect.bind(this);

    }

    redirect() {
        setTimeout(function(){ window.location.replace("https://www.mystudio.academy/m/?=5714559071/1988") }, 3000);
    }
    render() {
        if(this.props.showEnroll) {
            this.redirect();
        }
        return(
            <Modal isOpen={this.props.showEnroll}  >
                <ModalHeader >Please Wait</ModalHeader>
                <ModalBody>
                    Please wait while you are redirected.
                </ModalBody>

            </Modal>
        );
    }
}