import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../App'
import ImageDetailContainer from '../containers/ImageDetailContainer'
export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/' render={props => <ImageDetailContainer {...props} />} />
    </Switch>
  </BrowserRouter>)
