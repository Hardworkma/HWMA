import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


export default class Membership extends React.PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={{ active: this.state.activeTab === '1' }}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Memberships
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={{ active: this.state.activeTab === '2' }}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Events & Camps
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={{ active: this.state.activeTab === '3' }}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Trial Options
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <iframe className={'sub-menu'}  src={'https://www.mystudio.academy/m/?=hwma/1988///1548287359'}></iframe>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <iframe className={'sub-menu'}  src={'https://www.mystudio.academy/e/?=hwma/1988///1548287388'}></iframe>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <iframe className={'sub-menu'}  src={'https://www.mystudio.academy/t/?=hwma/1988'}></iframe>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}