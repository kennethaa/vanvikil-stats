// @flow

import React, { Component } from 'react';
import Icon from 'react-fa';
import {
  TableBody,
  TableRow,
  TableColumn,
} from './styled-components';

type Props = {
  match: Object,
};

class Stars extends Component<void, Props, void> {
  render() {
    const { match } = this.props;
    const { matchinfo } = match;

    return (
      <TableBody>
        <TableRow>
          <TableColumn>
            <Icon name="star" />
            {' '}
            <Icon name="star" />
            {' '}
            <Icon name="star" />
        </TableColumn>
          <TableColumn>
            {match.players.mappedPlayers[matchinfo.star3_id] &&
              match.players.mappedPlayers[matchinfo.star3_id].name}
          </TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>
            <Icon name="star" />
            {' '}
            <Icon name="star" />
        </TableColumn>
          <TableColumn>
            {match.players.mappedPlayers[matchinfo.star2_id] &&
              match.players.mappedPlayers[matchinfo.star2_id].name}
          </TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>
            <Icon name="star" />
        </TableColumn>
          <TableColumn>
            {match.players.mappedPlayers[matchinfo.star1_id] &&
              match.players.mappedPlayers[matchinfo.star1_id].name}
          </TableColumn>
        </TableRow>
      </TableBody>
    );
  }
}

export default Stars;
