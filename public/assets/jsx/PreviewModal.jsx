import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class PreviewModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.updateCaption = this.updateCaption.bind(this);

        this.state = {
            show: false,
            value: this.props.caption,
            class: 'no-border',
            readstate: true,
            disabled: 'disabled',
            artobject: this.props,
            displaynone: 'display-none',
            responsestatus: '',
            messagedisplay: ''
        };

    }


/**
 * on component load
 */
    componentDidMount() {
        this.setState({ displaynone: 'display-none' })

    }


    /**
     * close event for modal
     */
    handleClose() {
        this.setState({ show: false });
    }


    /**
     * modal show event
     */
    handleShow() {
        this.setState({ show: true });
    }


    /**
     * change event for textarea
     * @param {*} event 
     */
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ disabled: '' });

    }


    /**
     * change textarea apearance & functionality  onclick edit button
     * @param {*} event 
     */
    changeStyle(event) {
        if (this.state.class === 'no-border' && this.state.readstate === true) {
            this.setState({ class: 'with-border' });
            this.setState({ readstate: false });

        } else {
            this.setState({ class: 'no-border' });
            this.setState({ readstate: true });

        }
    }


    /**
     * update caption in db.json onclick update button. and add delay of 1s for users to read the update status message
     * @param {*} event 
     */
    updateCaption(event) {

        const obj = Object.assign({}, this.state.artobject, { caption: this.state.value });

        var url = 'http://localhost:3010/images/' + this.state.artobject.id;


        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)

        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({ displaynone: ' ' })
                    this.setState({ responsestatus: 'alert alert-success' })
                    this.setState({ messagedisplay: 'Caption Updated' })
                    this.setState({ readstate: true });
                    this.setState({ class: 'no-border' });
                    this.setState({ disabled: 'disabled' });

                } else {
                    this.setState({ displaynone: ' ' })
                    this.setState({ responsestatus: 'alert alert-danger' })
                    this.setState({ messagedisplay: 'Error Occurred While Updating' })
                    this.setState({ disabled: 'disabled' });


                }

            })
            .catch(err => err);



        setTimeout(function () {

            this.setState({ show: false });
            this.setState({ displaynone: 'display-none' })
        }.bind(this), 1000);

    }



    render() {

        return (
            <div className="col-md-12 text-center format-padding vertical-bottom m-b-10">

                <Button className="default col-md-12" onClick={this.handleShow}>  Preview        </Button>

                <Modal show={this.state.show} >
                    <Modal.Header >
                        <Modal.Title className="text-center"> {this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='img-preview col-md-12 no-border format-padding ' src={this.props.preview} />
                        <textarea className={'col-md-11 font-13  format-padding height-200 text-justify m-30 ' + this.state.class} value={this.state.value} readOnly={this.state.readstate} onChange={this.handleChange}> </textarea>
                        <Button className="btn btn-edit no-border col-md-1 m-30 " onClick={this.changeStyle}><i className="fa fa-edit"></i></Button>
                        <div className={"col-md-12  " + this.state.displaynone + " " + this.state.responsestatus}>
                            <strong>{this.state.messagedisplay}  </strong>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={"btn border-success " + this.state.disabled} onClick={this.updateCaption}>Update</Button>
                        <Button className="btn border-danger" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default PreviewModal;