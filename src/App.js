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
                <Element name="gallery">
                    <Highlights />
                </Element>
                <Footer />
            </div>
        );
    }
}

const styles = {
    page: {
        minWidth: 392,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
};

export default App;
