import React, { Component } from 'react';
import { IconButton, TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Close } from 'material-ui-icons';

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

    setContentMode = () => {
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
                <h1 style={{ lineHeight: 1 }}>{title}</h1>
                <p style={{ color: '#AAA' }}>{`by ${artist}`}</p>
                <p style={{ marginTop: 8 }}>{caption}</p>
                <div onClick={this.setEditMode}>
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
            <div className={classes.paper}>
                <IconButton
                    onClick={handleModalClose}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                >
                    <Close />
                </IconButton>
                <div style={{ display: 'flex' }}>
                    <img
                        alt={`Image`}
                        src={image.display_sizes[0].uri}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
                        {
                            editMode ?
                                this.renderEditForm() :
                                this.renderContent()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    paper: {
        position: 'absolute',
        maxWidth: '60%',
        maxHeight: '80vh',
        backgroundColor: '#EEE',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)',
        padding: '16px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default withStyles(styles)(ImageView);