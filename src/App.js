import React, { Component } from 'react';
import logo from './unscriptd.png';
import constants from './constants';

import Results from './componets/Results';
//import SavedProperties from './componets/SavedProperties';

import './styles/App.scss';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Search</div>
        </header>
        <section className="container">
          
            <Results />

        </section>

      </div>
    );
  }
}

export default App;
