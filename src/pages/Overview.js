// @flow

import type { Players } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';

type Props = {
  feeds: {
    players: Players,
  },
};

class Overview extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { players } = feeds;

    return (
      <div>
        <h1>
          {'Overview'}
        </h1>
        {JSON.stringify(players)}
      </div>
    );
  }
}

export default page({
  nav: true,
  feeds: {
    players: {
      feed: 'players',
      required: true,
    },
  },
})(Overview);
