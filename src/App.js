import React, { Component } from 'react';
import './styles/styles.css';
import { Element } from 'react-scroll';
import TopBar from './components/TopBar';
import Splash from './components/Splash';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div style={styles.page}>
                <TopBar />
                <Splash />
                <div style={{ minHeight: 'calc(100vh - 50px)', display: 'flex', flexDirection: 'column' }}>
                    <Element name="gallery" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Highlights />
                    </Element>
                    <Footer />
                </div>
            </div>
        );
    }
}

const styles = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
};

export default App;
