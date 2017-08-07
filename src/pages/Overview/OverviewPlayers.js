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
  team: 'ateam' | 'bteam',
  items: Array<
    | 'starting'
    | 'sub'
    | 'goals'
    | 'assists'
    | 'points'
    | 'stars'
    | 'yellow_cards'
    | 'yellowred_cards'
    | 'red_cards'
    | void
  >,
};

class OverviewPlayers extends Component<void, Props, void> {
  render() {
    const { players, team, items } = this.props;

    return (
      <TableBody>
        {players.map(player =>
          <TableRow key={player.id}>
            <TableColumn>
              {player.name}
            </TableColumn>
            {items.map((item, index) =>
              <TableColumn key={index}>
                {item && player[team] && player[team][item]}
              </TableColumn>
            )}
          </TableRow>
        )}
      </TableBody>
    );
  }
}

export default OverviewPlayers;
