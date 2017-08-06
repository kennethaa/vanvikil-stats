// @flow

import type { LiveFeedCurrentMatch } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';
import { Redirect } from 'react-router-dom';

type Props = {
  feeds: {
    liveFeedCurrentMatch: LiveFeedCurrentMatch,
  },
};

class Live extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { liveFeedCurrentMatch } = feeds;

    if (
      !liveFeedCurrentMatch ||
      !liveFeedCurrentMatch.matchinfo ||
      !liveFeedCurrentMatch.matchinfo[0]
    ) {
      return null;
    }

    const matchInfo = liveFeedCurrentMatch.matchinfo[0];

    return <Redirect to={`/live/match/${matchInfo.id}`} />;
  }
}

export default page({
  nav: true,
  feeds: {
    liveFeedCurrentMatch: {
      feed: 'live_feed_current_match',
      required: true,
    },
  },
})(Live);
