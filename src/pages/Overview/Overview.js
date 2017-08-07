// @flow

import type { Players, Player } from '../../types';

import React, { Component } from 'react';
import { page } from '../../hocs';
import { Row, Col, Table } from '../../components/styled-components';
import TableHeader from '../../components/TableHeader';
import OverviewPlayers from './OverviewPlayers';

type Props = {
  feeds: {
    players?: Players,
  },
};

type Team = 'ateam' | 'bteam';
type Item = 'starting' | 'sub' | 'goals' | 'assists' | 'points' | 'stars';

function getTopPlayers(
  players: Array<Player>,
  team: Team,
  item: Item
): Array<Player> {
  const topPlayers = [...players].sort((a, b) => {
    if (!a[team] && !b[team]) {
      return 0;
    }

    if (!a[team]) {
      return 1;
    }

    if (!b[team]) {
      return -1;
    }

    return b[team][item] - a[team][item];
  });

  return topPlayers.slice(0, 5);
}

function getAngryPlayers(players: Array<Player>, team: Team): Array<Player> {
  const angryPlayers = [...players].sort((a, b) => {
    if (!a[team] && !b[team]) {
      return 0;
    }

    if (!a[team]) {
      return 1;
    }

    if (!b[team]) {
      return -1;
    }

    if (b[team].red_cards !== a[team].red_cards)
      return b[team].red_cards - a[team].red_cards;
    else if (b[team].yellowred_cards !== a[team].yellowred_cards)
      return b[team].yellowred_cards - a[team].yellowred_cards;
    else if (b[team].yellow_cards !== a[team].yellow_cards)
      return b[team].yellow_cards - a[team].yellow_cards;
    return a.name.localeCompare(b.name);
  });

  return angryPlayers.slice(0, 5);
}

class Overview extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;

    if (!feeds.players || !feeds.players.players) {
      return null;
    }

    const { players } = feeds.players;

    return (
      <Row>
        <Col colWidth="50">
          <h1>
            {'A-lag'}
          </h1>
          <Table>
            <TableHeader header="STJERNER" />
            <OverviewPlayers
              players={getTopPlayers(players, 'ateam', 'stars')}
              team="ateam"
              items={[undefined, undefined, 'stars']}
            />
            <TableHeader header="TOPPSCORER" />
            <OverviewPlayers
              players={getTopPlayers(players, 'ateam', 'goals')}
              team="ateam"
              items={[undefined, undefined, 'goals']}
            />
            <TableHeader header="SERVITØREN" />
            <OverviewPlayers
              players={getTopPlayers(players, 'ateam', 'assists')}
              team="ateam"
              items={[undefined, undefined, 'assists']}
            />
            <TableHeader header="POENGBØRS" />
            <OverviewPlayers
              players={getTopPlayers(players, 'ateam', 'points')}
              team="ateam"
              items={[undefined, undefined, 'points']}
            />
            <TableHeader header="RÅTASSEN" />
            <OverviewPlayers
              players={getAngryPlayers(players, 'ateam')}
              team="ateam"
              items={['yellow_cards', 'yellowred_cards', 'red_cards']}
            />
          </Table>
        </Col>
        <Col colWidth="50">
          <h1>
            {'B-lag'}
          </h1>
          <Table>
            <TableHeader header="STJERNER" />
            <OverviewPlayers
              players={getTopPlayers(players, 'bteam', 'stars')}
              team="bteam"
              items={[undefined, undefined, 'stars']}
            />
            <TableHeader header="TOPPSCORER" />
            <OverviewPlayers
              players={getTopPlayers(players, 'bteam', 'goals')}
              team="bteam"
              items={[undefined, undefined, 'goals']}
            />
            <TableHeader header="SERVITØREN" />
            <OverviewPlayers
              players={getTopPlayers(players, 'bteam', 'assists')}
              team="bteam"
              items={[undefined, undefined, 'assists']}
            />
            <TableHeader header="POENGBØRS" />
            <OverviewPlayers
              players={getTopPlayers(players, 'bteam', 'points')}
              team="bteam"
              items={[undefined, undefined, 'points']}
            />
            <TableHeader header="RÅTASSEN" />
            <OverviewPlayers
              players={getAngryPlayers(players, 'bteam')}
              team="bteam"
              items={['yellow_cards', 'yellowred_cards', 'red_cards']}
            />
          </Table>
        </Col>
      </Row>
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
