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
          <ListItemColumnCenter xs={1} title="Lag">
            {'Lag'}
          </ListItemColumnCenter>
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
            <ListItem key={player.id} alignItems="center">
              <ListItemColumnCenter xs={1}>
                {player.number}
              </ListItemColumnCenter>
              <ListItemColumn xs={2}>
                {player.name}
              </ListItemColumn>
              <ListItemColumnCenter xs={1}>
                <div>
                  {'A-lag'}
                </div>
                <div>
                  {'B-lag'}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {`${player.ateam.starting} (${player.ateam.sub})`}
                </div>
                <div>
                  {`${player.bteam.starting} (${player.bteam.sub})`}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.goals}
                </div>
                <div>
                  {player.bteam.goals}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.assists}
                </div>
                <div>
                  {player.bteam.assists}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.points}
                </div>
                <div>
                  {player.bteam.points}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.stars}
                </div>
                <div>
                  {player.bteam.stars}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.yellow_cards}
                </div>
                <div>
                  {player.bteam.yellow_cards}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.yellowred_cards}
                </div>
                <div>
                  {player.bteam.yellowred_cards}
                </div>
              </ListItemColumnCenter>
              <ListItemColumnCenter xs={1}>
                <div>
                  {player.ateam.red_cards}
                </div>
                <div>
                  {player.bteam.red_cards}
                </div>
              </ListItemColumnCenter>
            </ListItem>
        )}
      </List>
    );
  }
}

export default SquadPlayers;
