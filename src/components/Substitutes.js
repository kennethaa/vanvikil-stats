// @flow

import React, { Component } from 'react';
import {
  TableBody,
  TableRow,
  TableColumn,
} from './styled-components';

type Props = {
  match: Object,
};

class Substitutes extends Component<void, Props, void> {
  render() {
    const { match } = this.props;

    return (
      <TableBody>
        {match.players.substitute.map(player => (
          <TableRow key={player.id}>
            <TableColumn>
              {player.number}
            </TableColumn>
            <TableColumn>
              {player.name}
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default Substitutes;
