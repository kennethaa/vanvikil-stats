// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Iframe from './components/Iframe';
import withNavigation from './hocs/withNavigation';
import Home from './pages/Home';
import MatchInfo from './pages/MatchInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Iframe />
          <Route exact path="/" render={withNavigation(Home)} />
          <Route path="/match-info/:matchId" component={MatchInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
