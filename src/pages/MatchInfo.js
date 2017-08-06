// @flow

import React, { Component } from 'react';
import { Container, Table } from '../components/styled-components';
import TableHeader from '../components/TableHeader';
import MatchFacts from '../components/MatchFacts';
import Goals from '../components/Goals';
import Cards from '../components/Cards';
import Stars from '../components/Stars';
import Lineups from '../components/Lineups';
import Substitutes from '../components/Substitutes';

type Props = {
  match: {
    params: {
      matchId: string,
    },
  },
};

type State = {
  match?: Object,
};

class MatchInfo extends Component<void, Props, State> {
  state = {
    match: undefined,
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { matchId } = params;

    fetch(`https://live.vanvikil.no/api/v1/live_feed/${matchId}`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(match => {
        if (match.happenings) {
          match.happenings.reverse();
        }

        match.players.mappedPlayers = {};

        match.players.starting.forEach(player => {
          match.players.mappedPlayers[player.id] = player;
        });

        match.players.substitute.forEach(player => {
          match.players.mappedPlayers[player.id] = player;
        });

        match.matchinfo = match.matchinfo[0];

        this.setState({
          match,
        });
      });
  }

  render() {
    const { match } = this.state;

    if (!match) {
      return null;
    }

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
export default MatchInfo;
