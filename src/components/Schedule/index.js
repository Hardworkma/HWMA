import React from "react";
import {Container, Col, Row} from 'reactstrap'
import Day from './day'


export default class Schedule extends React.PureComponent {
    render() {
        let days = [
            {day:'Monday', type: 'Basics & One Steps', classes:[
                    {clazz:'Hard Work Heroes  4 - 6 y/o', time:'4:15 - 4:50'},
                    {clazz:'Childrens Beginners  7 - 12 y/o', time:'5:00 - 5:50'},
                    {clazz:'Childrens Int / Adv  7 - 12 y/o', time:'6:00 - 6:50'},
                    {clazz:'Family Beginner  7+ y/o', time:'7:00 - 7:50'},
                    {clazz:'Family Int / Adv  7+ y/o', time:'8:00 - 8:50'},
                ]
            },
            {day:'Tuesday', type: 'Basics & One Steps', classes:[
                    {clazz:'Side Kicks  3 - 4 y/o', time:'4:15 - 4:50'},
                    {clazz:'Childrens Int / Adv  7 - 12 y/o', time:'5:00 - 5:50'},
                    {clazz:'Childrens Beginners  7 - 12 y/o', time:'6:00 - 6:50'},
                    {clazz:'Family Int / Adv  7+ y/o', time:'7:00 - 7:50'},
                    {clazz:'Family Beginner  7+ y/o', time:'8:00 - 8:50'},
                ]
            },
            {day:'Wednesday', type: 'Forms & Sparring', classes:[
                    {clazz:'Hard Work Heroes  4 - 6 y/o', time:'4:15 - 4:50'},
                    {clazz:'Childrens Beginners  7 - 12 y/o', time:'5:00 - 5:50'},
                    {clazz:'Childrens Int / Adv  7 - 12 y/o', time:'6:00 - 6:50'},
                    {clazz:'Family Beginner  7+ y/o', time:'7:00 - 7:50'},
                    {clazz:'Adults All Ranks  16+ y/o', time:'8:00 - 8:50'},
                ]
            },
            {day:'Thursday', type: 'Forms & Sparring', classes:[
                    {clazz:'Side Kicks  3 - 4 y/o', time:'4:15 - 4:50'},
                    {clazz:'Childrens Int / Adv  7 - 12 y/o', time:'5:00 - 5:50'},
                    {clazz:'Childrens Beginners  7 - 12 y/o', time:'6:00 - 6:50'},
                    {clazz:'Family Int / Adv  7+ y/o', time:'7:00 - 7:50'},
                    {clazz:'Family Beginner  7+ y/o', time:'8:00 - 8:50'},
                ]
            },
            {day:'Friday', type: 'Various', classes:[
                    {clazz:'Open Practice  7+ y/o', time:'4:15 - 4:50'},
                    {clazz:'Family Beginner  7+ y/o', time:'5:00 - 5:50'},
                    {clazz:'Family All Ranks  7+ y/o', time:'6:00 - 6:50'},
                ]
            },
            {day:'Saturday', type: 'Various', classes:[
                    {clazz:'Family Beginner  7+ y/o', time:'10:00 - 10:50'},
                    {clazz:'Family Int / Adv  7+ y/o', time:'11:00 - 11:50'},
                    {clazz:'Hard Work Heroes  4 - 6 y/o', time:'12:00 - 12:35'},
                ]
            }
        ]
        let schedule = days.map(function(day) {
            return <Day day={day} />
        })
        return (
            <div>
                <Row className={'schedule-day-row'}/>
                {schedule}
            </div>
        );
    }
}