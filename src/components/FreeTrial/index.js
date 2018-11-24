import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Col, Modal, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';


export default class FreeTrial extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            phone:"",
            questions:"",
            program:"Hard Work Heroes",
            showRegisterMessage: false,
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.initForm = this.initForm.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.showRegisterMessage) {
            // when the state is updated (turned red),
            // a timeout is triggered to switch it back off
            this.handleChange = setTimeout(() => {
                this.setState(() => ({showRegisterMessage: false}))
            }, 5000);
        }
    }


    handleChange(e) {
        debugger
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

        fetch('http://ec2-54-175-190-191.compute-1.amazonaws.com:3000/email', {
            method: 'post',
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }, this.initForm());
    }

    initForm() {
        this.setState({
            name: "",
            email:"",
            phone:"",
            questions:"",
            program:"Hard Work Heroes",
            showRegisterMessage: true,
        }, this.form && this.form.reset());
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({email: values.email, error: true});
    }

    render() {
        let formStyle = {paddingLeft:'8%'}
        let messageDisplay = (this.state.showRegisterMessage) ? {} : {'display':'none'}
        return(
            <Row >
                <Col xs={12} className={'register-message'} style={messageDisplay}>Registration complete!<br/>  HWMA will contact you shortly.</Col>
                <AvForm style={formStyle} onValidSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit} ref={c => (this.form = c)}>
                    <FormGroup>
                        <Row >
                            <Col xs={2}><Label for="name">Name: </Label></Col>
                        </Row>
                        <Row >
                            <Col><AvField className={'free-trial-input'} name="name" state={this.state.name} placeholder={"* Full Name"} required onChange={this.handleChange} errorMessage="Please enter your full name!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col xs={2}><Label for="email">Email: </Label></Col>
                        </Row>
                        <Row>
                            <Col><AvField className={'free-trial-input'} name="email" placeholder={"* Email"} type="email" required onChange={this.handleChange} errorMessage="Please enter a valid email!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup >
                        <Row>
                            <Col xs={2}><Label for="phone">Phone: </Label></Col>
                        </Row>
                        <Row>
                            <Col ><AvField className={'free-trial-input'} name="phone" placeholder={"* Phone xxx-xxx-xxxx"} type="phone" required onChange={this.handleChange} errorMessage="Please enter a valid phone number!"/></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={2}><Label for="phone">Program: </Label></Col>
                        </Row>
                        <Row>
                            <Col><Input className={'free-trial-input'} type="select" name="program" onChange={this.handleChange} id="program" >
                                <option>Hard Work Heroes</option>
                                <option>Sidekicks</option>
                                <option>Taekwondo</option>
                            </Input></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                            <Label for="questions">Questions/Comments:</Label>
                            <Input className={'free-trial-input'} type="textarea" name="questions" id="questions" onChange={this.handleChange} />
                    </FormGroup>
                        <Row>
                            <Button className={'register-button'} >Register</Button>
                            <br/>
                        </Row>
                    </AvForm>
            </Row>
        );
    }
}