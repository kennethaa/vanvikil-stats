// @flow

import type { RouterHistory } from 'react-router-dom';
import type { Options, Data, Actions, Routes } from '../types';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

type Props = {
  // from withRouter
  history: RouterHistory,

  children: React$Element<*>,
  routes: Routes,
};

type State = {
  options: Options,
  data: Data,
  actions: Actions,
  routes: Routes,
};

class VanvikIL extends Component<void, Props, State> {
  static childContextTypes = {
    options: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  };

  state = {
    options: {},
    data: {},
    actions: {
      saveNewData: (data: Data) => {
        this.setState({
          data: {
            ...this.state.data,
            ...data,
          },
        });
      },
    },
    routes: this.props.routes,
  };

  getChildContext() {
    return {
      options: this.state.options,
      data: this.state.data,
      actions: this.state.actions,
      routes: this.state.routes,
    };
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(VanvikIL);
