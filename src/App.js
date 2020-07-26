import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import styled from 'styled-components'
import Main from './Components/Main'

function App() {
  return (
    <Router
      basename="/"
    >
      <SWrapper>
        <Main />
      </SWrapper>
    </Router>
  );
}

export default App;

const SWrapper = styled.div`
  width: 100vw;
`
