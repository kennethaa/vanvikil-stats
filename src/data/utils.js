// @flow

import type { Lineups, Player } from '../types';

export function getMappedPlayers(lineups: Lineups): { [key: string]: Player } {
  const mappedPlayers = {};

  lineups.starting.forEach(player => {
    mappedPlayers[player.id] = player;
  });

  lineups.substitute.forEach(player => {
    mappedPlayers[player.id] = player;
  });

  return mappedPlayers;
}
