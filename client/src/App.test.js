import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fetches data from the API', () => {
  return fetch('http://localhost:3010/images/')
  .then(results => results.json())
  .then(data => {
    expect(data).not.toHaveLength(0)
  })
})