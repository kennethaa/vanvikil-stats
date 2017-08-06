// @flow

import type { LiveFeed } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';

type Props = {
  feeds: {
    liveFeed: LiveFeed,
  },
};

class LiveMatch extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { liveFeed } = feeds;

    return (
      <pre>
        {JSON.stringify(liveFeed)}
      </pre>
    );
  }
}

export default page({
  nav: true,
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
