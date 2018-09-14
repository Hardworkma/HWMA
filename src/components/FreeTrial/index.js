import React from 'react'
import { Button, Col, Modal, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';


export default class FreeTrial extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        console.log(this.props.className + ' ***')
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>FREE 2 Week Trial!</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="name">Name: </Label></Col>
                            <Col xs={10}><Input type="text" name="name" id="name" /></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="email">Email: </Label></Col>
                            <Col xs={10}><Input type="email" name="email" id="email" /></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="phone">Phone: </Label></Col>
                            <Col xs={10}><Input type="phone" name="phone" id="phone" /></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="phone">Program: </Label></Col>
                            <Col xs={10}><Input type="select" name="program" id="program" >
                                <option>Hard Work Heros</option>
                                <option>Sidekicks</option>
                                <option>Taekwondo</option>
                            </Input></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="questions">Questions/Comments</Label>
                        <Input type="textarea" name="questions" id="questions" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button className={'register-button'} onClick={this.toggle}>Register</Button>{' '}
                    <br/>

                </ModalFooter>
            </Modal>
        );
    }
}