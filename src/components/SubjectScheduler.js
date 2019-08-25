import React, {Component} from 'react';
import { Container, Row, Col} from "react-grid-system";
import {ShiftCard} from "./ShiftCard";
import {SubjectBox} from "./SubjectBox";
import {AddShiftButton} from "./AddShiftButton";
import {WeekDayHeaderBox} from "./WeekDayHeaderBox";
import Modal from '@material-ui/core/Modal';
import {ShiftEditorModal} from "./ShiftEditorModal";

const style = {
    rowStyle: {
        height: "90px"
    }
}

const weekNumberToDayMap= {
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri",
    5: "Sat",
    6: "Sun",
}

export class SubjectScheduler extends Component {
    constructor(props) {
        super(props);
        const weeklySchedules = this.props.dataStore.getWeeklySchedules(0);
        const maxWeeklyShiftCounts = this.calcMaxWeeklyShiftCount(weeklySchedules);
        this.state = {
            weeklySchedules: weeklySchedules,
            maxWeeklyShiftCounts: maxWeeklyShiftCounts,
            shiftEditorModalState: {
                open: false
            }
        };
        this.onAddShift = this.onAddShift.bind(this);
        this.onEditShift = this.onEditShift.bind(this);
        this.onDeleteShift = this.onDeleteShift.bind(this);
        // this.isEditorModalOpen = this.isEditorModalOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    calcMaxWeeklyShiftCount(weeklySchedules) {
        let maxWeeklyShiftCounts = {};
        for (let i = 0; i < weeklySchedules.length; i++) {
            const schedule = weeklySchedules[i].weeklySchedule;
            let maxWeeklyShiftCount = schedule[0].length;
            for  (let i = 0; i < 7; i++) {
                if (schedule[i].length > maxWeeklyShiftCount) {
                    maxWeeklyShiftCount = schedule[i].length;
                }
            }
            const subjectId = weeklySchedules[i].subjectId;
            maxWeeklyShiftCounts[subjectId] = maxWeeklyShiftCount
        }
        // console.log(maxWeeklyShiftCounts);
        return maxWeeklyShiftCounts
        // this.setState({maxWeeklyShiftCounts: maxWeeklyShiftCounts});
    }

    populateDayShiftsForSubject(subjectId, dayNumber, dayShifts) {
        const maxWeeklyShiftCount = this.state.maxWeeklyShiftCounts[subjectId];
        if (maxWeeklyShiftCount === 0) {
            return <Row style={style.rowStyle}><AddShiftButton onAddShift={this.onAddShift} subjectId={subjectId} dayNumber={dayNumber}/></Row>
        }
        const result = [];
        for (let i = 0; i < dayShifts.length; i++) {
            result.push(<Row style={style.rowStyle}><ShiftCard shift={dayShifts[i]} subjectId={subjectId} dayNumber={dayNumber} /></Row>)
        }
        for (let i = dayShifts.length; i < maxWeeklyShiftCount; i++) {
            result.push(<Row style={style.rowStyle}><AddShiftButton onAddShift={this.onAddShift} subjectId={subjectId} dayNumber={dayNumber}/></Row>)
        }
        return result
    }

    onAddShift(subjectId, dayNumber) {
        // alert("Create shift for " + subjectId + " on " + weekNumberToDayMap[dayNumber]);
        this.setState({shiftEditorModalState: {open: true}});
    }

    onEditShift(shiftId) {

    }

    onDeleteShift(shiftId) {

    }

    getShiftEditorModalState() {
        return this.state.shiftEditorModalState;
    }

    setShiftEditorModalState(state) {
        this.setState({shiftEditorModalState: state})
    }

    populateWeeklyScheduleRows() {
        return this.props.dataStore.getWeeklySchedules(0).map(schedule =>
            <Row>
                <Col xs={2.5}><SubjectBox subjectId={schedule.subjectId}/></Col>
                {Array.from(Array(7)).map( (e, weekNumber) =>
                        <Col>{this.populateDayShiftsForSubject(schedule.subjectId, weekNumber, schedule.weeklySchedule[weekNumber])}</Col>
                )}
            </Row>
        )
    }

    populateWeekDayHeaderRow() {
        return <Row>
            <Col xs={2.5}></Col>
            {Array.from(Array(7)).map( (e, weekNumber) =>
                    <Col><WeekDayHeaderBox dayName={weekNumberToDayMap[weekNumber]}/></Col>
                )
            }
        </Row>
    }

    render() {
        return (

            <Container fluid>
                {this.populateWeekDayHeaderRow()}
                {this.populateWeeklyScheduleRows()}
                <ShiftEditorModal setState={this.setShiftEditorModalState} getState={this.getShiftEditorModalState}/>
            </Container>


        );
    }
}