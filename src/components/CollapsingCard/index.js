import React from 'react'
import {Card, Button, Collapse, CardBody, CardTitle, Row} from 'reactstrap'

export default class CollapsingCard extends React.PureComponent{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <Card className={this.props.cardClass}>
                <CardTitle className={this.props.titleClass} onClick={this.toggle}>{this.props.title}</CardTitle>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>
                        {this.props.body}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}