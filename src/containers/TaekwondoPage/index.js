import React from 'react'
import {Row} from 'reactstrap'
import Title from '../../components/Title/index';
import Taekwondo from '../../components/Taekwondo/index';

export default class TaekwondoPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {

        var title = (this.props.match.params.age == 16) ? "Adult Taekwondo" : 'Taekwondo'
        return (
            <div>
                <Row className={'wrapper'}>
                    <div className={'card card-text'}>
                        <Title title={title}/>
                        <Taekwondo age={this.props.match.params.age}/>
                    </div>
                </Row>
            </div>
        )
    }
}