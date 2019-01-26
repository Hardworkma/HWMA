import React from 'react'
import {Col, Row, Tab, Tabs} from 'react-bootstrap'

export default class Membership extends React.PureComponent {
    render() {
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Memberships">
                    <Row>
                        <iframe className={'sub-menu'}  src={'https://www.mystudio.academy/t/?=hwma/1988'}></iframe>
                    </Row>
                </Tab>
                <Tab eventKey={2} title="Trial Offers">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Camps/Events" disabled>
                    Tab 3 content
                </Tab>
            </Tabs>
        )
    }
}