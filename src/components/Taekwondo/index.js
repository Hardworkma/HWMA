import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Taekwondo extends React.PureComponent {
    render() {

        if(this.props.age == 7) {
            return(
                <Row>
                    <Col className={'text-format'}>
                        Taekwondo is a Korean martial art meaning "foot, hand, way" or more artistically,
                        "the art of the foot and fist". It utilizes powerful kicks and precision footwork along
                        with quick and effective hand strikes to develops a strong and balanced skill set.
                        It has been recognized as an Olympic Sport, and is studied by people all over the world.
                        <br/>
                        <br/>
                        Our program combines the sport aspect of martial arts with a solid focus on self defense,
                        self discipline, and self improvement. Expect a fun and challenging atmosphere open to
                        adults, teens, kids, and families.
                        <br/>
                        <br/>
                        At the higher levels, our program starts to introduce the foundations of complimentary
                        styles, (hapkido, judo, juijitsu, boxing). so that by the time a student reaches
                        black belt, not only should they have a well rounded skill set that can serve them
                        well in any situation.
                        <br/>
                        <br/>
                    </Col>
                </Row>
            );
        } else {
            return(
                <Row>
                    <Col className={'text-format adult-tkd-format'}>
                        During our family classes, adults train with adults, and kids with kids, but sometimes an adult wishes to train without children present.
                        We do offer adult (16+) classes during the week, so that you can push yourself to your limits with people of your own size and ability.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Col>
                </Row>)
            ;
        }
    }
}