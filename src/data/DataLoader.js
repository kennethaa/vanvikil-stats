// @flow

import type { Match, Location } from 'react-router-dom';
import type { Options, Data, Actions, Routes } from '../types';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import getData from './getData';
import ErrorMessage from '../components/error';

type Props = {
  match: Match,
  location: Location,
  children: React$Element<*>,
};

type State = {
  loading: boolean,
  error?: Error,
  previousLocation?: Location,
};

class DataLoader extends Component<void, Props, State> {
  static contextTypes = {
    options: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  };

  state = {
    loading: false,
    error: undefined,
    previousLocation: undefined,
  };

  componentDidMount() {
    this.getData(this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      // save the location so we can render the old screen
      this.setState({
        loading: true,
        previousLocation: this.props.location,
      });

      this.getData(nextProps, true);
    }
  }

  getData = (props: Props, componentWillReceiveProps: boolean = false) => {
    const { routes, options, actions } = this.context;

    // load data while the old screen remains
    getData(routes, props.location.pathname, options)
      .then(data => {
        actions.saveNewData(data);

        if (componentWillReceiveProps) {
          // clear previousLocation so the next screen renders
          this.setState({
            loading: false,
            previousLocation: undefined,
          });
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({
          loading: false,
          error,
        });
      });
  };

  context: {
    options: Options,
    data: Data,
    actions: Actions,
    routes: Routes,
  };

  render() {
    const { children, location } = this.props;
    const { error, previousLocation } = this.state;

    return (
      <Route
        location={previousLocation || location}
        render={() => {
          if (error) {
            return <ErrorMessage error={error} />;
          }

          return children;
        }}
      />
    );
  }
}

export default withRouter(DataLoader);
