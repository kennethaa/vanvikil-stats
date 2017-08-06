// @flow

import type { MatchInfo, Lineups, Happening, Player } from './documents';

export type LiveFeed = {
  warning?: string,
  match_id?: string,
  matchinfo?: MatchInfo,
  season?: Array<{
    id: number,
    name: string,
    start_date: string,
    end_date: string,
  }>,
  result?: {
    hometeam_score?: number,
    awayteam_score?: number,
  },
  players?: Lineups,
  happenings?: Array<Happening>,
};

export type LiveFeedCurrentMatch = {
  matchinfo?: Array<MatchInfo>,
};

export type Players = {
  players?: Array<Player>,
};
