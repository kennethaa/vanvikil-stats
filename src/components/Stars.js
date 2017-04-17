// @flow

import React, { Component } from 'react';
import Icon from 'react-fa';

type Props = {
  match: Object,
};

class Stars extends Component<void, Props, void> {
  render() {
    const { match } = this.props;
    const { matchinfo } = match;

    return (
      <tbody>
        <tr>
          <td>
            <Icon name="star" />
            {' '}
            <Icon name="star" />
            {' '}
            <Icon name="star" />
          </td>
          <td>
            {match.players.mappedPlayers[matchinfo.star3_id] &&
              match.players.mappedPlayers[matchinfo.star3_id].name}
          </td>
        </tr>
        <tr>
          <td>
            <Icon name="star" />
            {' '}
            <Icon name="star" />
          </td>
          <td>
            {match.players.mappedPlayers[matchinfo.star2_id] &&
              match.players.mappedPlayers[matchinfo.star2_id].name}
          </td>
        </tr>
        <tr>
          <td>
            <Icon name="star" />
          </td>
          <td>
            {match.players.mappedPlayers[matchinfo.star1_id] &&
              match.players.mappedPlayers[matchinfo.star1_id].name}
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Stars;
