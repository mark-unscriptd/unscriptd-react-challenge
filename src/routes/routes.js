import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../App'
import ImageContainer from '../containers/ImageDetailContainer'
//      <Route path="/login" exact render={props => <Login {...props} />} />
export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/' render={props => <ImageContainer {...props} />} />
    </Switch>
  </BrowserRouter>)
