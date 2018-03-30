import _ from 'lodash';
import React, { Component } from 'react';
import { Fade } from 'material-ui';
import Image from './Image';

class Gallery extends Component {

    renderImages = () => {
        const { images } = this.props;
        let i = 1;
        return _.map(images, (img, id) => {
            i++;
            return (
                <Image
                    key={id}
                    id={id}
                    img={img}
                    timeout={1000/i}
                    onImageSelectClick={this.props.onImageSelectClick}
                    onImageClick={this.props.onImageClick}
                    selected={images[id].selected}
                />
            );
        });
    };

    render() {
        const { images, style } = this.props;

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
            <div style={{ ...styles.gallery, style }}>
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
    }
};

export default Gallery;