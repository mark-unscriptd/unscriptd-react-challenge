import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';


class AlertModal extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
        console.log(this.state.show)
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (this.state.show) {
            return (

                <Modal show={this.state.show} onHide={this.handleDismiss}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Body</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleDismiss}>Close</Button>
                    </Modal.Footer>
                </Modal>

            );
        }


    }
}

export default AlertModal;