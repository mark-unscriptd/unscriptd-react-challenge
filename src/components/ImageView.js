import React, { Component } from 'react';
import className from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { IconButton, TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Close } from 'material-ui-icons';
import * as actions from '../actions';

class ImageView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: props.image,
            editMode: false,
            form: {}
        };
    }

    resetForm = () => {
        const { image: { title, artist, caption } } = this.props;
        this.setState({
            form: {
                title,
                artist,
                caption
            }
        });
    };

    setEditMode = () => this.setState({ editMode: true });

    setContentMode = async () => {
        const { image, form } = this.state;
        const { updateImage } = this.props;
        await updateImage({ ...image, ...form });
        this.setState({ editMode: false });
    };

    renderTextField = (label, value, props) => (
        <TextField
            label={label}
            value={value}
            fullWidth
            {...props}
            onChange={event => {
                const term = event.target.value;
                this.setState({
                    form: {
                        ...this.state.form,
                        [label.toLowerCase()]: term
                    }
                });
            }}
            style={{ marginBottom: 8 }}
        />
    );

    renderEditForm = () => {
        const { form } = this.state;
        const { title, artist, caption } = form;
        console.log(`form is`);
        console.log(form);
        return (
            <div>
                {this.renderTextField("Title", title)}
                {this.renderTextField("Artist", artist)}
                {this.renderTextField("Caption", caption, { multiline: true })}
                <div onClick={this.setContentMode} style={{ marginTop: 8 }}>
                    <span className="link">Save</span>
                </div>
            </div>
        );
    };

    renderContent = () => {
        const { image: { title, artist, caption } } = this.props;
        return (
            <div>
                <h1 style={{ lineHeight: 1, fontSize: '200%' }}>{title}</h1>
                <p style={{ color: '#AAA' }}>{`by ${artist}`}</p>
                <p style={{ marginTop: 8 }}>{caption}</p>
                <div onClick={this.setEditMode} style={{ marginTop: 8 }}>
                    <span className="link">Edit</span>
                </div>
            </div>
        );
    };

    componentDidMount() {
        this.resetForm();
    }

    render() {
        const { editMode, image } = this.state;
        const { classes, handleModalClose } = this.props;
        return (
            <div className={className(classes.paper, "modalPaper")}>
                <IconButton
                    onClick={handleModalClose}
                    style={{
                        position: 'fixed',
                        zIndex: 80,
                        top: 0,
                        right: 0
                    }}
                >
                    <Close />
                </IconButton>
                <img
                    className="imageViewImage"
                    alt={`Image`}
                    src={image.display_sizes[0].uri}
                    style={{ minWidth: 280, width: '100%', maxHeight: '50vh', objectFit: 'contain', backgroundColor: '#000' }}
                />
                <div className="imageViewDetail" style={{ marginTop: 16, minWidth: 280 }}>
                    {
                        editMode ?
                            this.renderEditForm() :
                            this.renderContent()
                    }
                </div>
            </div>
        );
    }
}

const styles = {
    paper: {
        position: 'absolute',
        width: '90vw',
        maxHeight: '90vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EEE',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)',
        padding: '16px 48px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.2s ease-in-out'
    }
};

const mapStateToProps = ({ images }) => ({
    images
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, actions)
)(ImageView);