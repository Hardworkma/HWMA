import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Col, Modal, FormGroup, Input, Label, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';


export default class FreeTrial extends React.PureComponent {
    constructor(props) {
        super(props);



        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.initForm = this.initForm.bind(this);
    }
    // componentDidUpdate(prevProps, prevState) {
    //     // if (this.state.showRegisterMessage) {
    //     //     // when the state is updated (turned red),
    //     //     // a timeout is triggered to switch it back off
    //     //     this.handleChange = setTimeout(() => {
    //     //         this.setState(() => ({showRegisterMessage: false}))
    //     //     }, 5000);
    //     }
    // }


    // handleChange(e) {
    //     debugger
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // handleSubmit(e) {
    //     // e.preventDefault();
    //     // let data = {
    //     //     "name": this.state.name,
    //     //     "email": this.state.email,
    //     //     "phone": this.state.phone,
    //     //     "questions": this.state.questions,
    //     //     "program": this.state.program}
    //     //
    //     // fetch('http://ec2-54-175-190-191.compute-1.amazonaws.com:3000/email', {
    //     //     method: 'post',
    //     //     headers: {
    //     //         'Accept': 'application/json; charset=utf-8',
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(data)
    //     // }, this.initForm());
    // }

    // initForm() {
    //     // this.setState({
    //     //     name: "",
    //     //     email:"",
    //     //     phone:"",
    //     //     questions:"",
    //     //     program:"Hard Work Heroes",
    //     //     showRegisterMessage: true,
    //     // }, this.form && this.form.reset());
    // }

    // handleInvalidSubmit(event, errors, values) {
    //     this.setState({email: values.email, error: true});
    // // }

    render() {
        // let formStyle = {paddingLeft:'8%'}
        // let messageDisplay = (this.state.showRegisterMessage) ? {} : {'display':'none'}
        return(
            <Row >
                <Col>
                </Col>
                <Button className={'register-button'} >Sign Up!</Button>
                <br/>
            </Row>
        );
    }
}