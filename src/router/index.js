import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'
import MovieContainer from '../containers/MovieContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/movie/:id' component={MovieContainer} />
    </Switch>
  </BrowserRouter>
)

export default Router