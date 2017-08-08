// @flow

import type { Match } from 'react-router-dom';
import type { PageConfig, Options, Data, Actions, Routes } from '../types';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import hoistStatics from 'hoist-non-react-statics';

type Props = {
  match: Match,
};

function createPage(WrappedComponent: ReactClass<*>, pageConfig: PageConfig) {
  const displayName = `Page(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  class Container extends Component<void, Props, void> {
    static displayName = displayName;

    static contextTypes = {
      options: PropTypes.object.isRequired,
      data: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired,
      routes: PropTypes.array.isRequired,
    };

    static pageConfig = pageConfig;

    context: {
      options: Options,
      data: Data,
      actions: Actions,
      routes: Routes,
    };

    render() {
      const { options, data, actions } = this.context;
      const { match } = this.props;

      let feeds = {};
      if (pageConfig.feeds) {
        feeds = Object.keys(pageConfig.feeds).reduce((d, feedKey) => {
          const feedConfig = pageConfig.feeds && pageConfig.feeds[feedKey];

          if (!feedConfig) {
            return d;
          }

          const params = feedConfig.params && feedConfig.params(options, match);
          if (params) {
            const dataKey = `${feedConfig.feed}/${params}`;
            if (data && data[dataKey] && data[dataKey] && data[dataKey].json) {
              const feed = data[dataKey].json;
              d[feedKey] = feed;
            }
          } else {
            if (data && data[feedConfig.feed] && data[feedConfig.feed].json) {
              const feed = data[feedConfig.feed].json;
              d[feedKey] = feed;
            }
          }

          return d;
        }, {});
      }

      return (
        <WrappedComponent
          {...this.props}
          options={options}
          feeds={feeds}
          actions={actions}
        />
      );
    }
  }

  return hoistStatics(Container, WrappedComponent);
}

export default function page(pageConfig: PageConfig = {}) {
  return (WrappedComponent: ReactClass<*>) =>
    createPage(WrappedComponent, pageConfig);
}
