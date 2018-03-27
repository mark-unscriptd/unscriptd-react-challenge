import _ from 'lodash';
import React, { Component } from 'react';
import className from 'classnames';
import { Button, Fade } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Done } from 'material-ui-icons';

class Gallery extends Component {

    renderImages = () => {
        const { classes, images } = this.props;
        let i = 0;
        return _.map(images, (img, key) => {
            const { artist, caption, date_created, display_sizes } = img;
            const [ comp, preview, thumb ] = display_sizes;
            i += 50;
            return (
                <Fade key={key} in timeout={i}>
                    <div style={styles.imageContainer}>
                        <Button
                            variant='fab'
                            classes={{
                                root: className(
                                    classes.buttonRoot,
                                    { [classes.buttonRootSelected]: images[key].selected }
                                )
                            }}
                            onClick={() => this.props.onImageClick(key)}
                        >
                            <Done
                                className={
                                    className({ [classes.buttonIconSelected]: images[key].selected })
                                }
                            />
                        </Button>
                        <img
                            className={
                                className(
                                    'image',
                                    { [classes.selected]: images[key].selected },
                                    { 'hoverable': !images[key].selected }
                                )
                            }
                            alt={`Thumbnail ${key}`}
                            src={thumb.uri}
                            style={styles.image}
                        />
                    </div>
                </Fade>
            );
        });
    };

    render() {
        const { images } = this.props;

        if (_.isEmpty(images)) {
            return (
                <Fade in>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{ color: '#c0392b', fontSize: 60 }}>AIRBALL</h1>
                        <h3 style={{ marginTop: 12 }}>No images matching search term!</h3>
                    </div>
                </Fade>
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
    }
}

const styles = {
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    selected: {
        padding: 16
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
        backgroundColor: '#000',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    buttonRoot: {
        width: 32,
        minWidth: 16,
        height: 32,
        minHeight: 16,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        margin: 8,
        '&:hover': {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))'
        }
    },
    buttonRootSelected: {
        backgroundColor: '#1E90FF',
        '&:hover': {
            backgroundColor: '#1E90FF !important'
        }
    },
    buttonIconSelected: {
        fill: '#FFF'
    }
};

export default withStyles(styles)(Gallery);