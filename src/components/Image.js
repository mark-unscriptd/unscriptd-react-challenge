import React from 'react';
import className from 'classnames';
import { Button, Fade } from 'material-ui';
import { Done } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

const Image = props => {
    const { classes, img, id, timeout, selected, onImageSelectClick, onImageClick } = props;

    const { artist, caption, date_created, display_sizes } = img;
    const [ comp, preview, thumb ] = display_sizes;
    return (
        <Fade key={id} in timeout={timeout}>
            <div style={styles.imageContainer}>
                <Button
                    variant='fab'
                    classes={{
                        root: className(
                            classes.buttonRoot,
                            { [classes.buttonRootSelected]: selected }
                        )
                    }}
                    onClick={() => onImageSelectClick(id)}
                >
                    <Done
                        className={
                            className({ [classes.buttonIconSelected]: selected })
                        }
                    />
                </Button>
                <img
                    onClick={() => onImageClick(id)}
                    className={
                        className(
                            'image',
                            { [classes.selected]: selected },
                            { 'hoverable': !selected }
                        )
                    }
                    alt={`Thumbnail ${id}`}
                    src={thumb.uri}
                    style={styles.image}
                />
            </div>
        </Fade>
    );
};

const styles = {
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

export default withStyles(styles)(Image);