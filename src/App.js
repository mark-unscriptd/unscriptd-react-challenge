import React, { Component } from 'react';
import logo from './unscriptd.png';
import constants from './constants';

import Results from './componets/Results';
//import SavedProperties from './componets/SavedProperties';

import './styles/App.scss';

class App extends Component {
  constructor(props){
    super();

    this.state = {
      searchResults: [],
      keyword: false
    }
  }

  searchImage(e) {

    let inputText = e.target.value;

      this.setState({
        searchResults: (inputText.length == 0) ? [] : this.state.searchResults,
        keyword: (inputText.length == 0) ? false : true
      })

        
          let searchURL = `${constants.BASE_URL}?caption_like=${e.target.value}`;
        
          fetch(searchURL)
            .then(response => response.json())
            .then(response => {
              console.log(response)
              this.setState({
                searchResults: response
              })
            }
            )

  }

  render() {
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="search"><input onChange={(e) => this.searchImage(e)} type="text" placeholder="SEARCH" /></div>
        </header>
        <section className="container">
          
            <Results keyword={this.state.keyword} searchResults={this.state.searchResults}/>

        </section>

      </div>
    );
  }
}

export default App;
