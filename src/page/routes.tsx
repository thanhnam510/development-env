import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';

class Routes extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
        </div>
    )
  }
}

export default Routes;
