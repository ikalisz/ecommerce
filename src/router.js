import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Components/Home'
import Clothing from './Components/Clothing/index'

export default (
  <Switch>
    <Route exact route="/" component={Home} />
    <Route route="/clothing/:section" component={Clothing} />
  </Switch>
)
