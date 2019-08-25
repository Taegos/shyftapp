import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Col, Row} from "react-grid-system";

const styles={
    fontVariant: "body2",
    fontWeight: "bold",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
};

export class WeekDayHeaderBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Typography style={styles} variant={styles.fontVariant}>{this.props.dayName}</Typography>
        );
    }
}