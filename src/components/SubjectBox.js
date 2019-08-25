import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    fontVariant: "body2",
    borderTopStyle: "solid",
    borderWidth: "2px",
    height: "100%",
    width: "100%"
};

export class SubjectBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Typography style={styles} variant={styles.fontVariant}>{this.props.subjectId}</Typography>
        );
    }
}