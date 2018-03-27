import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, IconButton } from 'material-ui';
import { Delete } from 'material-ui-icons';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

class Highlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allImages: {},
            images: {},
            term: ''
        };

        axios.get('http://localhost:3010/images')
            .then(({ data }) => {
                this.setImages(data);
            })
            .catch(e => console.log(e));
    }

    setImages = data => {
        const dataObj = _.keyBy(data, 'id');
        console.log(dataObj);
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

    onImageClick = id => {
        console.log(this.state);
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

    handleDelete = () => {
        const unselected = _.filter(this.state.allImages, img => !img.selected);
        this.setImages(unselected);
    };

    render() {
        const { allImages, images } = this.state;

        const numberSelected = _.filter(this.state.allImages, img => img.selected).length;
        console.log(numberSelected);
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
                                <IconButton
                                    disabled={numberSelected === 0}
                                    onClick={this.handleDelete}
                                    style={{ marginLeft: 8 }}
                                >
                                    <Delete />
                                </IconButton>
                            </div>
                            <Gallery images={images} onImageClick={this.onImageClick} />
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

export default Highlights;