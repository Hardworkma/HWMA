import React from 'react';
import {Col, Row} from 'reactstrap'

export default class Taekwondo extends React.PureComponent {
    render() {
        var text = ''
        if(this.props.age == 16) {
            text = 'During our family classes, adults train with adults, and kids with kids, but sometimes an adult wishes to train without children present. ' +
                'We do offer adult (16+) classes during the week, so that you can push yourself to your limits with people of your own size and ability.'
        } else {
            text = 'Taekwondo is a Korean martial art meaning "foot, hand, way" or more artistically,\n' +
                '                    "the art of the foot and fist". It utilizes powerful kicks and precision footwork along\n' +
                '                    with quick and effective hand strikes to develops a strong and balanced skill set.\n' +
                '                    It has been recognized as an Olympic Sport, and is studied by people all over the world.\n' +
                '                    <br/>\n' +
                '                    <br/>\n' +
                '                    Our program combines the sport aspect of martial arts with a solid focus on self defense,\n' +
                '                    self discipline, and self improvement. Expect a fun and challenging atmosphere open to\n' +
                '                    adults, teens, kids, and families.\n' +
                '                    <br/>\n' +
                '                    <br/>\n' +
                '                    At the higher levels, our program starts to introduce the foundations of complimentary\n' +
                '                    styles, (hapkido, judo, juijitsu, boxing). so that by the time a student reaches\n' +
                '                    black belt, not only should they have a well rounded skill set that can serve them\n' +
                '                    well in any situation.\n' +
                '                    <br/>\n' +
                '                    <br/>'
        }
        return(
            <Row>
                <Col className={'text-format'}>
                    {text}
                </Col>
            </Row>
        );
    }
}