import React from 'react';
import background from '../images/splash.jpg';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { ArrowDownward } from 'material-ui-icons'
import { Link } from 'react-scroll'

const Splash = props => {
    const { classes } = props;
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.text}>TODAY'S FEATURED GAME:</h1>
                <h1 style={{ ...styles.text, ...styles.title }}>MIAMI HEAT vs WASHINGTON WIZARDS</h1>
                <p style={{ ...styles.text, marginTop: '100px', alignSelf: 'center', fontSize: '32px', color: '#EEE', letterSpacing: 4 }}>Highlights:</p>
                <Link to="gallery" smooth={true} offset={50} duration={500} style={{ alignSelf: 'center' }}>
                    <Button
                        className="hoverable"
                        classes={{ root: classes.button }}
                        variant="fab"
                    >
                        <ArrowDownward style={styles.icon} />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        flexDirection: 'column',
        top: 50,
        padding: '0 32px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
    },
    content: {
        minWidth: '300px',
        width: '60%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto'
    },
    text: {
        color: '#FFF'
    },
    title: {
        fontSize: '300%',
        alignSelf: 'center',
        marginTop: 16
    },
    button: {
        marginTop: 32,
        alignSelf: 'center',
        minWidth: '96px !important',
        minHeight: '96px !important'
    },
    icon: {
        height: 64,
        width: 64
    }
};

export default withStyles(styles)(Splash);