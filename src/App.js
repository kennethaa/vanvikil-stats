// @flow

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import MatchInfo from './routes/MatchInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/match-info/:matchId"
            component={MatchInfo}
          />
        </div>
      </Router>
    );
  }
}

export default App;
