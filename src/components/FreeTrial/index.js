import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Col, Modal, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';


export default class FreeTrial extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            email:"",
            phone:"",
            questions:"",
            program:"Hard Work Heroes"
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "questions": this.state.questions,
            "program": this.state.program}

            console.log(JSON.stringify(data))

        fetch('http://ec2-54-175-190-191.compute-1.amazonaws.com:3000/email', {
            method: 'post',
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        this.toggle();
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({email: values.email, error: true});
    }

    render() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>FREE 2 Week Trial!</ModalHeader>
                <ModalBody>
                    <AvForm onValidSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="name">Name: </Label></Col>
                            <Col xs={10}><AvField name="name" placeholder={"* Full Name"} required onChange={this.handleChange} errorMessage="Please enter your full name!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="email">Email: </Label></Col>
                            <Col xs={10}><AvField name="email" placeholder={"* Email"} type="email" required onChange={this.handleChange} errorMessage="Please enter a valid email!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="phone">Phone: </Label></Col>
                            <Col xs={10}><AvField name="phone" placeholder={"* Phone xxx-xxx-xxxx"} type="phone" required onChange={this.handleChange} errorMessage="Please enter a valid phone number!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="phone">Program: </Label></Col>
                            <Col xs={10}><Input type="select" name="program" onChange={this.handleChange} id="program" >
                                <option>Hard Work Heroes</option>
                                <option>Sidekicks</option>
                                <option>Taekwondo</option>
                            </Input></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label for="questions">Questions/Comments</Label>
                        <Input type="textarea" name="questions" id="questions" onChange={this.handleChange} />
                    </FormGroup>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button className={'register-button'} onClick={this.handleSubmit}>Register</Button>{' '}
                    <br/>

                </ModalFooter>
            </Modal>
        );
    }
}