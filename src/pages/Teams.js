// @flow

import type { Players } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';
import { Row, Column } from 'hedron';

type Props = {
  feeds: {
    players?: Players,
  },
};

class Teams extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { players } = feeds;

    return (
      <Row>
        <Column>
          <h1>
            {'A-lag'}
          </h1>
          <h1>
            {'B-lag'}
          </h1>
          <pre>
            {JSON.stringify(players, null, 2)}
          </pre>
        </Column>
      </Row>
    );
  }
}

export default page({
  feeds: {
    players: {
      feed: 'players',
      required: true,
    },
  },
})(Teams);
