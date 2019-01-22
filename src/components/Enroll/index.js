import React from 'react'
import { Modal, ModalHeader, ModalBody, Row } from 'reactstrap';


export default class Enroll extends React.PureComponent {
    constructor(props) {
        super(props);

        this.redirect = this.redirect.bind(this);

    }

    redirect() {
        setTimeout(function(){ window.location.replace("https://www.mystudio.academy/m/?=hwma/1988") }, 4000);
    }
    render() {
        if(this.props.showEnroll) {
            this.redirect();
        }
        return(
            <Modal isOpen={this.props.showEnroll}  >
                <ModalHeader >Redirecting...</ModalHeader>
                <ModalBody>
                    <Row className={'text-format'}>
                        <img src={'https://s3.amazonaws.com/hwma-images/fist.gif'} />
                    </Row>
                </ModalBody>

            </Modal>
        );
    }
}