import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Main from './Components/Main'

function App() {
  return (
    <Router
      basename="/"
    >
      <Main />
    </Router>
  );
}

export default App;
