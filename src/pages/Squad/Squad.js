// @flow

import type { Players } from '../../types';

import React, { Component } from 'react';
import { page } from '../../hocs';
import { Row, Column } from 'hedron';
import { Table } from '../../components/styled-components';
import TableHeader from '../../components/TableHeader';
import SquadPlayers from './SquadPlayers';

type Props = {
  feeds: {
    players?: Players,
  },
};

class Squad extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { players } = feeds;

    if (!players || !players.players) {
      return null;
    }

    const squad = players.players.reduce(
      (s, player) => {
        if (player.position === 'goalkeeper') {
          s.goalkeepers.push(player);
        } else if (player.position === 'defender') {
          s.defenders.push(player);
        } else if (player.position === 'midtfielder') {
          s.midtfielders.push(player);
        } else if (player.position === 'striker') {
          s.strikers.push(player);
        }

        return s;
      },
      {
        goalkeepers: [],
        defenders: [],
        midtfielders: [],
        strikers: [],
      }
    );

    return (
      <Row>
        <Column>
          <Table>
            <TableHeader header="MÅLVAKTER" />
            <SquadPlayers players={squad.goalkeepers} />
            <TableHeader header="FORSVAR" />
            <SquadPlayers players={squad.defenders} />
            <TableHeader header="MIDTBANE" />
            <SquadPlayers players={squad.midtfielders} />
            <TableHeader header="ANGREP" />
            <SquadPlayers players={squad.strikers} />
          </Table>
        </Column>
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
})(Squad);
