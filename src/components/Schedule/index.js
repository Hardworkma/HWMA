import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


export default class Schedule extends React.PureComponent {
    render() {

        return (
            <Table>
                    <Thead>
                        <Tr>
                            <Th>Time</Th>
                            <Th>Monday  Basics</Th>
                            <Th>Tuesday Basics</Th>
                            <Th>Wednesday Sparring</Th>
                            <Th>Thursday Sparring</Th>
                            <Th>Friday Various</Th>
                            <Th>Saturday Various</Th>
                        </Tr>

                    </Thead>
                <Tbody>

                    <Tr>
                        <Td>10:00 - 10:50</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>Open Practice</Td>
                    </Tr>
                    <Tr>
                        <Td>11:00 - 11:50</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>Family Beginner</Td>
                    </Tr>
                    <Tr>
                        <Td>12:00 - 12:50</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>Family All Ranks</Td>
                    </Tr>
                    <Tr>
                        <Td>4:15 - 4:50</Td>
                        <Td>Hard Work Heroes</Td>
                        <Td>Side Kicks</Td>
                        <Td>Hard Work Heroes</Td>
                        <Td>Side Kicks</Td>
                        <Td>Open Practice</Td>
                        <Td/>
                    </Tr>
                    <Tr>
                        <Td>5:00 - 5:50</Td>
                        <Td>Children's Beginner</Td>
                        <Td>Children's Int / Adv</Td>
                        <Td>Children's Beginner</Td>
                        <Td>Children's Int / Adv</Td>
                        <Td>Family Beginner</Td>
                    </Tr>
                    <Tr>
                        <Td>6:00 - 6:50</Td>
                        <Td>Children's Int / Adv</Td>
                        <Td>Children's Beginner</Td>
                        <Td>Children's Int / Adv</Td>
                        <Td>Children's Beginner</Td>
                        <Td>Family All Ranks</Td>
                    </Tr>
                    <Tr>
                        <Td>7:00 - 7:50</Td>
                        <Td>Family Beginnerr</Td>
                        <Td>Family Int / Adv</Td>
                        <Td>Family Beginner</Td>
                        <Td>Family Int / Adv</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>8:00 - 8:50</Td>
                        <Td>Family Int / Adv</Td>
                        <Td>Family Beginnerr</Td>
                        <Td>Family Int / Adv</Td>
                        <Td>Family Beginnerr</Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
            </Table>
        );
    }
}