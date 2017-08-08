// @flow

import type { LiveFeed } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';
import { Row, Column } from 'hedron';

type Props = {
  feeds: {
    liveFeed?: LiveFeed,
  },
};

class LiveMatch extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { liveFeed } = feeds;

    return (
      <Row>
        <Column>
          <pre>
            {JSON.stringify(liveFeed, null, 2)}
          </pre>
        </Column>
      </Row>
    );
  }
}

export default page({
  feeds: {
    liveFeed: {
      feed: 'live_feed',
      params: (options, match) => {
        if (!match.params.matchId) {
          throw new Error('matchId is required');
        }

        return match.params.matchId;
      },
      required: true,
    },
  },
})(LiveMatch);
