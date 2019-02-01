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
  players: Array<Player>,
};

class SquadPlayers extends Component<void, Props, void> {
  render() {
    const { players } = this.props;

    return (
      <List>
        <ListItemHeader>
          <ListItemColumnCenter xs={1} title="Nummer">
            {'#'}
          </ListItemColumnCenter>
          <ListItemColumn xs={2} title="Navn">
            {'Navn'}
          </ListItemColumn>
          <ListItemColumn xs={1} title="Lag">
            {'Lag'}
          </ListItemColumn>
          <ListItemColumnCenter xs={1} title="Kamper">
            {'Kamper'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Mål">
            {'Mål'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Assists">
            {'Assists'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Poeng">
            {'Poeng'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Stjerner">
            {'Stjerner'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Gule kort">
            {'Gule kort'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="To gule kort">
            {'To gule kort'}
          </ListItemColumnCenter>
          <ListItemColumnCenter xs={1} title="Røde kort">
            {'Røde kort'}
          </ListItemColumnCenter>
        </ListItemHeader>
        {players.map(
          player =>
            player.ateam &&
            player.bteam &&
            <ListItem alignItems="center" key={player.id}>
              <ListItemColumnCenter xs={1}>
                {player.number}
              </ListItemColumnCenter>
              <ListItemColumn xs={2}>
                {player.name}
              </ListItemColumn>
              <ListItemColumn xs={1}>
                {'A-lag'}
                <br />
                {'B-lag'}
              </ListItemColumn>
              <ListItemColumnCenter xs={1}>
                {`${player.ateam.starting} (${player.ateam.sub})`}
                <br />
                {`${player.bteam.starting} (${player.bteam.sub})`}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.goals}
                <br />
                {player.bteam.goals}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.assists}
                <br />
                {player.bteam.assists}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.points}
                <br />
                {player.bteam.points}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.stars}
                <br />
                {player.bteam.stars}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.yellow_cards}
                <br />
                {player.bteam.yellow_cards}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.yellowred_cards}
                <br />
                {player.bteam.yellowred_cards}
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                {player.ateam.red_cards}
                <br />
                {player.bteam.red_cards}
              </ListItemColumnCenter>
            </ListItem>
        )}
      </List>
    );
  }
}

export default SquadPlayers;
