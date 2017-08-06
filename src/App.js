// @flow

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { VanvikIL } from './providers';
import { DataLoader } from './data';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <VanvikIL routes={routes}>
          <DataLoader>
            {renderRoutes(routes)}
          </DataLoader>
        </VanvikIL>
      </BrowserRouter>
    );
  }
}

export default App;
