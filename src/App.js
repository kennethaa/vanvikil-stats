// @flow

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { VanvikIL } from './providers';
import { Page } from 'hedron';
import Toolbar from './components/Toolbar';
import { DataLoader } from './data';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <VanvikIL routes={routes}>
          <Page fluid>
            <Toolbar routes={routes} />
            <DataLoader>
              {renderRoutes(routes)}
            </DataLoader>
          </Page>
        </VanvikIL>
      </BrowserRouter>
    );
  }
}

export default App;
