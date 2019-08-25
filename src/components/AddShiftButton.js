import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    invisibleButton: {
        width: "100%",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "transparent",
        outline: "none",
        border: "none"
    },
    icon: {
        width: "16px",
        height: "16px",
        padding: "4px",
        color: "white",
        backgroundColor:"blue",
        borderRadius: "12px",
        visibility: "hidden"
    }
};


export class AddShiftButton extends Component {
    constructor(props) {
        super(props);
        this.state = {iconStyle: styles.icon};
        this.showButton = this.showButton.bind(this);
        this.hideButton = this.hideButton.bind(this);
        this.addShift = this.addShift.bind(this);
    }


    showButton() {
        const tmp = JSON.parse(JSON.stringify(this.state.iconStyle));
        tmp.visibility = "visible";
        this.setState({iconStyle: tmp})
    }

    hideButton() {
        const tmp = JSON.parse(JSON.stringify(this.state.iconStyle));
        tmp.visibility = "hidden";
        this.setState({iconStyle: tmp })
    }

    addShift() {
        this.props.onAddShift(this.props.subjectId, this.props.dayNumber);
    }

    render() {
        return (
            <button onMouseLeave={this.hideButton} onMouseEnter={this.showButton} onClick={this.addShift} style={styles.invisibleButton}>
                <AddIcon style={this.state.iconStyle}/>
            </button>
        );
    }
}