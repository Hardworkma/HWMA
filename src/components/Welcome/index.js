import React from 'react';
import {Col, Row} from 'reactstrap'
import Title from "../Title";

export default class Welcome extends React.PureComponent {
    render() {

        return (
            <Row>
                <Col className={'text-format'}>
                    As a community of experienced martial artists we understand there are many options when deciding
                    to begin studying a martial art, what style to practice, and most importantly what school.
                    Northern Virginia contains many great coaches and masters for you to choose from,
                    so we are honored that you are considering HWMA to train.
                    <br/>
                    <br/>
                    Our goal is to bring out the best in our students through practicing martial arts. To teach that
                    through hard work, goals can be accomplished, through determination progress can be made, with
                    courage, fear can be overcome. Just as people grow throughout their lives, martial arts students
                    grow throughout their training. It is a long path to black belt, and at HWMA we believe that
                    rank progression is not solely based on physical ability, but students' mental progression as
                    well. To bring out the best in both us and our students, it is a path we walk together.
                    <br/>
                    <br/>
                    To accomplish this goal we have developed a detailed and comprehensive curriculum that is
                    designed to build and reinforce both mental and physical skills. Each rank of training has
                    clear and attainable goals and a progression that builds towards the next. Every student will
                    know exactly what they will be working on at their rank, as well as what is expected of them to
                    attain the next rank, with highly trained instructors helping them along the way.
                    <br/>
                    <br/>
                    As you train with us we ask that you keep these thoughts in mind. That there is no finishing to
                    martial arts, there is only continued improvement, for those of us who teach, it is a lifelong
                    passion we hope to ignite in our students as well. There are no shortcuts to success in this
                    pursuit. Hard work, dedication, and courage are the keys to success. Lastly that if you join
                    us, you join a family of students that train hard, work hard, and do their best to grow and
                    support each other. It’s a rare breed, and we are glad to have you with us.
                    <br/>
                    <br/>
                </Col>
            </Row>
        );
    }
}