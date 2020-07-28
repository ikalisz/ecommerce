import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Components/Home'
import Clothing from './Components/Clothing/index'

export default (
  <Switch>
    <Route path="/clothing/:id" component={Clothing} />
    <Route exact path="/" component={Home} />
  </Switch>
)
