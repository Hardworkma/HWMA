import React from 'react'
import {Col, Row} from 'reactstrap'
import CollapsingCard from "../CollapsingCard";

export default class FAQ extends React.PureComponent{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        let title_1 = 'Is Taekwondo just for kids?'
        let body_1 = 'While many of our students are children, we also train adults, teens, and families. Classes are ' +
                        'designed to  allow similar age groups to train together and get the benefits of training with ' +
                        'their peers.';

        let title_2 = 'How often should I train?';
        let body_2 = 'Many students train 2-3 days a week. Depending on your goals, you may train as often as you wish.';

        let title_3 = 'Are all martial arts similar?'
        let body_3 = 'No. Martial arts philosophy changes style to style, and even school to school. It is important for' +
                        ' prospective students to talk to the instructors, take a few classes, and get a feel for the ' +
                        'culture and focus of the schools they are interested in to make sure that they are a suitable ' +
                        'fit for the student\'s goals. Any good school will allow a student time to study before they ' +
                        'choose to enroll.';

        let title_4 = 'Can this be done with existing injuries or disabilities?';
        let body_4 = 'We have many students who are working around injuries or other limitations. Depending on the ' +
                        'injury, your recovery status, and health, our programs may or may not be a good match. We ' +
                        'recommend you talk to an instructor to address any concerns.';

        let title_5 = 'How long does it take to earn my black belt?';
        let body_5 = 'Depending on your fitness, learning, and attendance, it can take between 3-5 years to earn a black belt.';

        let title_6 = 'What can I expect / should do my first class?';
        let body_6 = 'During your first class, you should show up between 5-10 minutes early, and inform the staff so ' +
                        'that you can get situated. If you do not yet have a uniform, wear something comfortable that ' +
                        'you can move in. Gym cloths are suggested. We ask that you take off any jewelry that could get ' +
                        'snagged or pulled on during training. Do your best during the class, and do not be afraid to ' +
                        'ask staff if you have any questions or need a break, we want you to have fun and be challenged, ' +
                        'not hurt or injured. After class, you may experience some soreness depending on your activity ' +
                        'levels. Make sure to drink plenty of water and rest as needed.';

        return (
            <div className={'wrapper'}>
                <CollapsingCard cardClass={'faq-card'} title={title_1} titleClass={'faq-title'} body={body_1}/>
                <CollapsingCard cardClass={'faq-card'} title={title_2} titleClass={'faq-title'} body={body_2}/>
                <CollapsingCard cardClass={'faq-card'} title={title_3} titleClass={'faq-title'} body={body_3}/>
                <CollapsingCard cardClass={'faq-card'} title={title_4} titleClass={'faq-title'} body={body_4}/>
                <CollapsingCard cardClass={'faq-card'} title={title_5} titleClass={'faq-title'} body={body_5}/>
                <CollapsingCard cardClass={'faq-card'} title={title_6} titleClass={'faq-title'} body={body_6}/>
            </div>
        )
    }
}