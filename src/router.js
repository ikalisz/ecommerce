import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Components/Home'
import Clothing from './Components/Clothing/index'

export default (
  <Routes>
    <Route path="/clothing/:section" component={Clothing} />
    <Route path="/clothing" component={Clothing} />
    <Route exact path="/" component={Home} />
  </Routes>
)
