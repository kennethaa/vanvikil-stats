// @flow

import type { Players, Happening } from './documents';

export type LiveFeed = {
  warning?: string,
  match_id?: string,
  matchinfo?: {
    id: number,
    season_id: number,
    hometeam_id: string,
    awayteam_id: string,
    start_time: string,
    venue?: string,
    ref?: string,
    a_ref1?: string,
    a_ref2?: string,
    spectators?: string,
    star3_id?: number,
    star2_id?: number,
    star1_id?: number,
  },
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
  players?: Players,
  happenings?: Array<Happening>,
};
