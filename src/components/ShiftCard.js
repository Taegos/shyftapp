import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    layout: {
        margin: "2px",
        width: "100%"
    },
    fontVariant: "body2"
}

export class ShiftCard extends Component {
    constructor(props) {
        super(props);
    }

    formatTimePoint(timePoint) {
        return timePoint < 10 ? "0" + timePoint.toString() : timePoint.toString();
    }

    formatShiftInterval() {
        const shiftData = this.props.shift;
        const startHour = this.formatTimePoint(shiftData.startHour);
        const startMinute = this.formatTimePoint(shiftData.startMinute);
        const endHour = this.formatTimePoint(shiftData.endHour);
        const endMinute = this.formatTimePoint(shiftData.endMinute);
        return startHour + ":" + startMinute + " - " + endHour + ":" + endMinute
    }

    render() {
        return (
            <Card style={styles.layout}>
                <CardContent>
                    <Typography variant={"caption"} color="textSecondary">
                        {this.props.shift.role}
                    </Typography>
                    <Typography variant={styles.fontVariant} component="p">
                        {this.formatShiftInterval()}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}