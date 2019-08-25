import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const style = {
    position: "absolute",
    width: "400px",
}

export class ShiftEditorModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.getState.open}
                onClose={this.props.setState({open: false})}
                style={style}
            >
                <div >
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>

                </div>
            </Modal>
        );
    }
}