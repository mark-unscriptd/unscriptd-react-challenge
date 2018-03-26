import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from 'material-ui';
import SearchBar from './SearchBar';

class Highlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allImages: [],
            images: [],
            term: ''
        };

        axios.get('http://localhost:3010/images')
            .then(({ data }) => {
                data.selected = false;
                this.setState({
                    allImages: data,
                    images: data
                })
            })
            .catch(e => console.log(e));
    }

    renderImages = () => {
        return this.state.images.map((img, i) => {
            const { artist, caption, date_created, display_sizes } = img;
            const [ comp, preview, thumb ] = display_sizes;
            return (
                <div key={i} style={styles.imageContainer}>
                    <img
                        className='hoverable image'
                        alt={`Thumbnail ${i}`}
                        src={thumb.uri}
                        style={styles.image}
                    />
                </div>
            );
        });
    };

    onChange = term => {
        const termUpper = term.toUpperCase();
        this.setState({
            images: this.state.allImages.filter(img => img.caption.toUpperCase().includes(termUpper))
        })
    };

    renderGallery = () => {
        if (this.state.images.length === 0) {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ color: '#c0392b', fontSize: 60 }}>AIRBALL</h1>
                    <h3 style={{ marginTop: 12 }}>No images matching search term!</h3>
                </div>
            )
        }
        return (
            <div style={styles.gallery}>
                {this.renderImages()}
                <div style={{ flex: 1, height: 0, margin: 4, minWidth: 240 }} />
                <div style={{ flex: 1, height: 0, margin: 4, minWidth: 240 }} />
                <div style={{ flex: 1, height: 0, margin: 4, minWidth: 240 }} />
            </div>
        );
    };

    render() {
        return (
            <div style={styles.container}>
                {
                    this.state.allImages.length === 0 ?
                        <div style={{ ...styles.content, justifyContent: 'center' }}>
                            <CircularProgress/>
                        </div> :
                        <div style={styles.content}>
                            <h1 style={{ alignSelf: 'flex-start', marginBottom: 16 }}>Photos:</h1>
                            <SearchBar onChange={this.onChange} style={{ alignSelf: 'flex-start' }} />
                            {this.renderGallery()}
                        </div>
                }
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        minHeight: 'calc(100vh - 150px)',
        backgroundColor: '#EEE',
        display: 'flex',
        flexDirection: 'column'
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
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        minWidth: 240,
        height: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: 4,
        backgroundColor: '#000'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    gallery: {
        marginTop: 16,
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    }
};

export default Highlights;