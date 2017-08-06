// @flow

import React, { Component } from 'react';
import { TableBody, TableRow, TableColumn } from './styled-components';

type Props = {
  match: Object,
};

class Lineups extends Component<void, Props, void> {
  render() {
    const { match } = this.props;

    return (
      <TableBody>
        {match.players.starting.map(player =>
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

export default Lineups;
