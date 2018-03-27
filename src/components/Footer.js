import React from 'react';
import Logo from '../images/logo.png';
import { SocialIcon } from 'react-social-icons';

export default props => (
    <div style={styles.container}>
        <div style={styles.content}>
            <SocialIcon className='hoverable socialButton' url="https://www.linkedin.com/in/callistusystan" color='#999' style={styles.icon} />
            <SocialIcon className='hoverable socialButton' url="https://github.com/callistusystan" color='#999' style={styles.icon} />
        </div>
    </div>
);

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)',
        zIndex: 100
    },
    content: {
        minWidth: '300px',
        width: '60%',
        margin: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        margin: '0 32px',
        width: 64,
        height: 64
    }
};