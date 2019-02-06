import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import CollapsingCard from "../CollapsingCard";

export default class Why extends React.PureComponent{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        let title_1 = 'Highest quality curriculum & instructors'
        let body_1 = 'Our curriculum was developed with over thirty years of training experience, and decades of teaching experience. ' +
            'We take modern sport science, nationally ranked educational models, and combine it with the traditional martial arts ' +
            'philosophy to help students attain the best results with the utmost focus on safety and well being. ' +
            'Be it fitness, self defense, discipline, or confidence. Our instructors will help you every step along the way, ' +
            'and go through extensive background checks & instructor training before they teach our students.';

        let title_2 = 'All Inclusive';
        let body_2 = 'We will never charge you for anything outside of your membership. Your uniform and equipment are included. ' +
            'Your testing is free. You take as many classes as you want. We will never nickle and dime you out of your hard earned money ' +
            'by trying to sell you on anything you don\'t need or want. Ask around, then come back to us.';

        let title_3 = 'No Long Term Contracts or Huge Price Jumps';
        let body_3 = 'We wont lock you into a three or five year memberships. You sign up. If you\'re happy you stay with us. ' +
            'You stay with us, you pay the same price. We wont raise costs on enrolled students. We believe loyalty deserves being ' +
            'rewarded. We will never try to up sell you into paying for a fancy named multi-year contract. Every student is given our ' +
            'best, no exceptions, no paying more for that extra attention, be that for a year, or a lifetime.';

        let title_4 = 'Singular School, Singular Focus';
        let body_4 = 'Martial arts training is personal, and we believe it should be a passion for those of us who teach it. ' +
            'Each and every student will meet and train under the owners and staff directly, they will make sure your training is ' +
            'individualized and geared towards your personal goals, as you grow, your goals grow, you\'ll know each instructor, ' +
            'and you\'ll know they are right there beside you every step of the way. We aren\'t a chain or franchise, and have ' +
            'no intention of no overseeing each and every class directly and personally.';

        let title_5 = 'Community Driven';
        let body_5 = 'We aren\'t looking to have fifty person classes and five hundred students enrolled. We\'re not a big box gym, ' +
            'nor do we want to be. We want to know our students, and we want to care about them on an individual level. We work ' +
            'to individualize our teaching to fit each student, to know their strengths and weaknesses, and help them become the ' +
            'best person, mentally, physically, socially, that they can be. You can\'t do that with hundred and hundreds of ' +
            'students. We want to keep the school personal. It is your school as much as ours, and we never want you to ' +
            'get lost in the crowd.';


        return (
            <Container>
                <Row className={'wrapper'}>
                    <img id="us_vs_them" className={'why_hwma_img'} src={'https://s3.amazonaws.com/hwma-images/UsThem.png'} />
                </Row>
                                <br/>
                <br/>
                <Row className={'wrapper'}>
                    <CollapsingCard cardClass={'faq-card'} title={title_1} titleClass={'faq-title'} body={body_1}/>
                    <CollapsingCard cardClass={'faq-card'} title={title_2} titleClass={'faq-title'} body={body_2}/>
                    <CollapsingCard cardClass={'faq-card'} title={title_3} titleClass={'faq-title'} body={body_3}/>
                    <CollapsingCard cardClass={'faq-card'} title={title_4} titleClass={'faq-title'} body={body_4}/>
                    <CollapsingCard cardClass={'faq-card'} title={title_5} titleClass={'faq-title'} body={body_5}/>
                </Row>
            </Container>
        )
    }
}