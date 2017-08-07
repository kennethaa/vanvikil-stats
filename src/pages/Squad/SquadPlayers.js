// @flow

import type { Player } from '../../types';

import React, { Component } from 'react';
import {
  TableBody,
  TableRow,
  TableColumn,
} from '../../components/styled-components';

type Props = {
  players: Array<Player>,
};

class SquadPlayers extends Component<void, Props, void> {
  render() {
    const { players } = this.props;

    return (
      <TableBody>
        {players.map(player =>
          <TableRow key={player.id}>
            <TableColumn>
              {player.number}
            </TableColumn>
            <TableColumn>
              {player.name}
            </TableColumn>
          </TableRow>
        )}
      </TableBody>
    );
  }
}

export default SquadPlayers;
