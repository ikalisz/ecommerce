import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Components/Home'

export default (
  <Switch>
    <Route exact route="/" component={Home} />
  </Switch>
)
