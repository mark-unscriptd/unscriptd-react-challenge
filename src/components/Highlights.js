import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CircularProgress, IconButton, Modal, Tooltip } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Delete } from 'material-ui-icons';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import ImageView from './ImageView';
import * as actions from '../actions';
import { compose } from 'recompose';

class Highlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allImages: {},
            images: {},
            term: '',
            clicked: undefined,
            loaded: false
        };

        this.props.getImages();
    }

    onChange = term => {
        const { searchImages } = this.props;
        searchImages(term);
    };

    onImageSelectClick = id => {
        const { images, toggleSelect } = this.props;
        toggleSelect({
            ...images[id],
            selected: !images[id].selected
        });
    };

    onImageClick = id => {
        this.setState({ clicked: id });
    };

    handleModalClose = () => this.setState({ clicked: undefined });

    handleDelete = () => {
        const { images, deleteImage } = this.props;
        _.forEach(images, img => {
            if (img.selected) {
                deleteImage(img);
            }
        });
    };

    componentDidUpdate() {
        if (!this.state.loaded) {
            if (!_.isEmpty(this.props.images)) {
                this.setState({ loaded: true })
            }
        }
    }

    render() {
        const { loaded, clicked } = this.state;
        const { images } = this.props;

        const numberSelected = _.filter(images, img => img.selected).length;
        return (
            <div style={{ ...styles.container, ...this.props.styles }}>
                {
                    !loaded ?
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
                                open={clicked}
                                onClose={this.handleModalClose}
                            >
                                {
                                    clicked &&
                                    <ImageView image={images[clicked]} handleModalClose={this.handleModalClose} />
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
    }
};

const mapStateToProps = ({ images }) => {
    return ({
        images
    });
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, actions)
)(Highlights);