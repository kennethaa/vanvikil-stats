// @flow

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { VanvikIL } from './providers';
import { Page } from 'hedron';
import Toolbar from './components/Toolbar';
import { DataLoader } from './data';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Overview from './pages/Overview';

class App extends Component {
  render() {
    const mainPage = window.location.hostname === 'vanvikil.no';

    return (
      <BrowserRouter>
        <VanvikIL routes={routes}>
          <Page fluid>
            {!mainPage && <Toolbar routes={routes} />}
            <DataLoader>
              {mainPage ? <Overview /> : renderRoutes(routes)}
            </DataLoader>
          </Page>
        </VanvikIL>
      </BrowserRouter>
    );
  }
}

export default App;
