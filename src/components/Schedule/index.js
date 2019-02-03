import React from "react";
import {Container, Col, Row} from 'reactstrap'
import Day from './day'


export default class Schedule extends React.PureComponent {
    render() {
        let days = [
            {day:'Monday', type: 'Basics & One Steps', classes:[
                    {clazz:'Hard Work Heroes', time:'4:15 - 4:50'},
                    {clazz:'Childrens Beginners', time:'5:00 - 5:50'},
                    {clazz:'Childrens Int / Adv', time:'6:00 - 6:50'},
                    {clazz:'Family Beginner', time:'7:00 - 7:50'},
                    {clazz:'Family Int / Adv', time:'8:00 - 8:50'},
                ]
            },
            {day:'Tuesday', type: 'Basics & One Steps', classes:[
                    {clazz:'Side Kicks', time:'4:15 - 4:50'},
                    {clazz:'Childrens Int / Adv', time:'5:00 - 5:50'},
                    {clazz:'Childrens Beginners', time:'6:00 - 6:50'},
                    {clazz:'Family Int / Adv', time:'7:00 - 7:50'},
                    {clazz:'Family Beginner', time:'8:00 - 8:50'},
                ]
            }
        ]
        let schedule = days.map(function(day) {
            return <Day day={day} />
        })
        return (
            <div>
                {schedule}
            </div>
        );
    }
}