import React from 'react';
import Logo from '../images/logo.png';

export default props => (
    <div style={styles.container}>
        <div className="content" style={styles.content}>
            <a href='https://www.unscriptd.com/' style={styles.logoContainer}>
                <img alt="logo" src={Logo} style={styles.logo} />
            </a>
        </div>
    </div>
);

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: '#222',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)',
        zIndex: 100
    },
    content: {
        width: '60%',
        height: 50,
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        alignSelf: 'flex-end'
    },
    logo: {
        height: 38,
        width: 'auto'
    }
};