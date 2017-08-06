// @flow

import React, { Component } from 'react';
import Icon from 'react-fa';
import { TableBody, TableRow, TableColumn } from './styled-components';

type Props = {
  match: Object,
};

class Cards extends Component<void, Props, void> {
  render() {
    const { match } = this.props;

    const cards = match.happenings.filter(
      happening =>
        happening.happening === 'yellowcard' ||
        happening.happening === 'yellowredcard' ||
        happening.happening === 'redcard'
    );

    return (
      <TableBody>
        {cards.map(card => {
          let color = '#FFEB3B';
          if (card.happening === 'yellowredcard') {
            color = '#FF9800';
          } else if (card.happening === 'redcard') {
            color = '#F44336';
          }

          return (
            <TableRow key={card.id}>
              <TableColumn>{`${card.minute}'`}</TableColumn>
              <TableColumn>
                <Icon name="square" style={{ color }} />{' '}
                {card.hometeam === 0
                  ? match.matchinfo.awayteam_id
                  : match.matchinfo.hometeam_id}
                {card.player && `: ${card.player}`}
              </TableColumn>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}

export default Cards;
