import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../App';
import ImageContainer from '../containers/ImageContainer';
//      <Route path="/login" exact render={props => <Login {...props} />} />
export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/image" render={props => <ImageContainer {...props} />} />
    </Switch>
  </BrowserRouter>);
