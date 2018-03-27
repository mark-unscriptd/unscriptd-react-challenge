import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, IconButton, Modal, Tooltip } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Delete, Close } from 'material-ui-icons';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import ImageView from './ImageView';

class Highlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allImages: {},
            images: {},
            term: '',
            clicked: undefined
        };

        axios.get('http://localhost:3010/images')
            .then(({ data }) => {
                this.setImages(data);
            })
            .catch(e => console.log(e));
    }

    setImages = data => {
        const dataObj = _.keyBy(data, 'id');
        this.setState({
            allImages: dataObj,
            images: dataObj
        })
    };

    onChange = term => {
        const termUpper = term.toUpperCase();
        this.setState({
            images: _.keyBy(_.filter(this.state.allImages, img => img.caption.toUpperCase().includes(termUpper)), 'id')
        })
    };

    onImageSelectClick = id => {
        this.setState({
            images: {
                ...this.state.images,
                [id]: {
                    ...this.state.images[id],
                    selected: !this.state.images[id].selected
                }
            },
            allImages: {
                ...this.state.allImages,
                [id]: {
                    ...this.state.allImages[id],
                    selected: !this.state.allImages[id].selected
                }
            },
        });
    };

    onImageClick = id => {
        this.setState({ clicked: id });
    };

    handleModalClose = () => this.setState({ clicked: undefined });

    handleDelete = () => {
        const unselected = _.filter(this.state.allImages, img => !img.selected);
        _.forEach(this.state.allImages, img => {
            if (img.selected) {
                axios.delete(`http://localhost:3010/images/${img.id}`)
                    .catch(e => console.log(e));
            }
        });
        this.setImages(unselected);
    };

    render() {
        const { allImages, images, clicked } = this.state;

        const numberSelected = _.filter(allImages, img => img.selected).length;
        return (
            <div style={{ ...styles.container, ...this.props.styles }}>
                {
                    _.isEmpty(allImages) ?
                        <div className="content" style={{ ...styles.content, justifyContent: 'center' }}>
                            <CircularProgress/>
                        </div> :
                        <div className="content" style={styles.content}>
                            <h1 style={{ color: '#444', alignSelf: 'flex-start' }}>Photos:</h1>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <SearchBar onChange={this.onChange} style={{ flex: 1, margin: '8px 0px' }} />
                                <Tooltip title="Delete" placement="right-end">
                                    <IconButton
                                        disabled={numberSelected === 0}
                                        onClick={this.handleDelete}
                                        style={{ marginLeft: 8 }}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <Gallery
                                images={images}
                                onImageSelectClick={this.onImageSelectClick}
                                onImageClick={this.onImageClick}
                                style={{ marginTop: 8 }}
                            />
                            <Modal
                                className="content"
                                open={clicked}
                                onClose={this.handleModalClose}
                            >
                                {
                                    clicked &&
                                    <ImageView image={allImages[clicked]} handleModalClose={this.handleModalClose} />
                                }
                            </Modal>
                        </div>
                }
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EEE'
    },
    content: {
        minWidth: '300px',
        width: '60%',
        flex: 1,
        margin: '16px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
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
    },
};

export default withStyles(styles)(Highlights);