// @flow

import type { Players, Player } from '../types';

export function getMappedPlayers(players: Players): { [key: string]: Player } {
  const mappedPlayers = {};

  players.starting.forEach(player => {
    mappedPlayers[player.id] = player;
  });

  players.substitute.forEach(player => {
    mappedPlayers[player.id] = player;
  });

  return mappedPlayers;
}
