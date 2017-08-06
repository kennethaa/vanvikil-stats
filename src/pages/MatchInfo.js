// @flow

import type { Match } from 'react-router-dom';
import type { LiveFeed } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';
import { getMappedPlayers } from '../data';
import { Container, Table } from '../components/styled-components';
import TableHeader from '../components/TableHeader';
import MatchFacts from '../components/MatchFacts';
import Goals from '../components/Goals';
import Cards from '../components/Cards';
import Stars from '../components/Stars';
import Lineups from '../components/Lineups';
import Substitutes from '../components/Substitutes';

type Props = {
  match: Match,
  feeds: {
    liveFeed?: LiveFeed,
  },
};

class MatchInfo extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { liveFeed } = feeds;

    if (!liveFeed) {
      return null;
    }

    if (liveFeed.warning) {
      return null;
    }

    const match = {
      matchinfo: liveFeed.matchinfo && liveFeed.matchinfo[0],
      happenings: liveFeed.happenings && liveFeed.happenings.reverse(),
      players: liveFeed.players && {
        starting: liveFeed.players.starting,
        substitute: liveFeed.players.substitute,
        mappedPlayers: getMappedPlayers(liveFeed.players),
      },
    };

    return (
      <Container>
        <Table>
          <TableHeader header="KAMPFAKTA" />
          <MatchFacts match={match} />
          <TableHeader header="MÅL" />
          <Goals match={match} />
          <TableHeader header="KORT" />
          <Cards match={match} />
          <TableHeader header="DAGENS VANVIKSTJERNER" />
          <Stars match={match} />
          <TableHeader header="LAGOPPSTILLING" />
          <Lineups match={match} />
          <TableHeader header="INNBYTTERE" />
          <Substitutes match={match} />
        </Table>
      </Container>
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
})(MatchInfo);
