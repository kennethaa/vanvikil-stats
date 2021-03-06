// @flow

import type { Player } from '../../types';

import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemHeader,
  ListItemColumn,
  ListItemColumnCenter,
} from '../../components/styled-components';

type Props = {
  header: string,
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
  itemsHeaders?: Array<string>,
};

class OverviewPlayers extends Component<void, Props, void> {
  render() {
    const { header, players, team, items, itemsHeaders } = this.props;

    return (
      <List>
        <ListItemHeader>
          <ListItemColumn xs={12 - items.length}>
            {header}
          </ListItemColumn>
          {itemsHeaders &&
            itemsHeaders.map((itemHeader, index) =>
              <ListItemColumnCenter key={index} xs={1}>
                {itemHeader}
              </ListItemColumnCenter>
            )}
        </ListItemHeader>
        {players.map(player =>
          <ListItem alignItems="center" key={player.id}>
            <ListItemColumn xs={12 - items.length}>
              {player.name}
            </ListItemColumn>
            {items.map((item, index) =>
              <ListItemColumnCenter key={index} xs={1}>
                {item && player[team] && player[team][item]}
              </ListItemColumnCenter>
            )}
          </ListItem>
        )}
      </List>
    );
  }
}

export default OverviewPlayers;
