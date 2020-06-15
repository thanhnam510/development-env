import React, { Component } from 'react';
import { Home } from './page/home';
import { About } from './page/about';
import { Router } from '@reach/router';
import { Dash } from './page/dash';
class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <About path="about" />
        <Dash path="dash" />
      </Router>
    );
  }
}

export default App;
