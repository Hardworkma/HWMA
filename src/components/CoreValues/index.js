import React from 'react'
import {Col, Row} from 'reactstrap'

export default class CoreValues extends React.PureComponent{
    render() {
        return (
            <div>
                <div className={'core-values-text'}>
                    HWMA core values are what we use to design our programs, govern our interactions with students
                    and staff, and how we interact with our community. We believe that by following them, we can
                    offer something truly unique and great to our students, and through them, bring these values
                    to the world at large.
                </div>
                <div className={'core-values-list'}>
                    <ul>
                        <li>Be humble</li>
                        <li>Learn from mistakes</li>
                        <li>Honest relationships through communication</li>
                        <li>Personal accountability</li>
                        <li>Be passionate and determined</li>
                        <li>Do more with less</li>
                        <li>Success through hard work</li>
                        <li>Quality through simplicity</li>
                        <li>Courage to shape a better future</li>
                        <li>Community as family</li>
                    </ul>
                </div>
            </div>
        )
    }
}