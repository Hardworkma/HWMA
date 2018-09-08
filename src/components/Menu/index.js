import React from 'react';
import { Label, Input, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Menu extends React.PureComponent {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <Row className={'menu'}>
                <Col xs={"4"}>
                    <Input type="select" name="program" id="program" onChange={this.changeLayout}>
                        <option value={'0'}>Layout Default</option>
                        <option value={'1'} >Layout 1</option>
                    </Input>
                </Col>
                <Col xs={"8"}>
                    <Nav className={'menu'}>
                        <NavItem className={"menu-item"}>
                            <Link className={"menu-link"} to="/">Home</Link>
                        </NavItem>
                        <Dropdown nav isOpen={this.state.aboutOpen} toggle={this.toggleAbout}>
                            <DropdownToggle nav caret className={"menu-link"}>
                                About
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><Link className={"menu-link"} to="/welcome">Welcome Letter</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/core">Core Values</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/reviews">Reviews</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/philosophy">Philosophy</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/safesport">SafeSport</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown nav isOpen={this.state.programOpen} toggle={this.togglePrograms}>
                            <DropdownToggle nav className={"menu-link"} caret>
                                Programs
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><Link className={"menu-link"} to="/taekwondo">Taekwondo (6+ y/o)</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/hardworkheros">Hard Work Heros (4-6 y/o)</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/sidekicks">Sidekicks (3-4 y/o)</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/afterschool">Afterschool Program</Link></DropdownItem>
                                <DropdownItem><Link className={"menu-link"} to="/camp">Camp Program</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem className={"menu-item"}>
                            <Link className={"menu-link"} to="/schedule">Schedule</Link>
                        </NavItem>
                        <NavItem className={"menu-item"}>
                            <Link className={"menu-link"} to="/faq">FAQ</Link>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        )
    }
}

{/*<Row className={'menu'}>*/}
    {/*<Col xs={"4"}>*/}

    {/*</Col>*/}
    {/*<Col xs={"1"}>*/}
        {/*<Link to="/">Home</Link>*/}
    {/*</Col>*/}
    {/*<Col xs={"1"}>*/}
        {/*<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
            {/*<DropdownToggle nav caret>*/}
                {/*About*/}
            {/*</DropdownToggle>*/}
            {/*<DropdownMenu>*/}
                {/*<DropdownItem>Welcome Letter</DropdownItem>*/}
                {/*<DropdownItem>Core Values</DropdownItem>*/}
                {/*<DropdownItem>Reviews</DropdownItem>*/}
            {/*</DropdownMenu>*/}
        {/*</Dropdown>*/}
    {/*</Col>*/}
    {/*<Col xs={"1"}>*/}
        {/*<Link to="/welcome">Welcome</Link>*/}
    {/*</Col>*/}
    {/*<Col xs={"2"}>*/}
        {/*Student Resources*/}
    {/*</Col>*/}
    {/*<Col xs={"1"}>*/}
        {/*Schedule*/}
    {/*</Col>*/}
    {/*<Col xs={"2"}>*/}
        {/*Contact Us*/}
    {/*</Col>*/}
{/*</Row>*/}