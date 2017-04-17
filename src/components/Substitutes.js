// @flow

import React, { Component } from 'react';

type Props = {
  match: Object,
};

class Substitutes extends Component<void, Props, void> {
  render() {
    const { match } = this.props;

    return (
      <tbody>
        {match.players.substitute.map(player => (
          <tr key={player.id}>
            <td>
              {player.number}
            </td>
            <td>
              {player.name}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Substitutes;
